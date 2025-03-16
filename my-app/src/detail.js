import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel, Card, Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { FaUtensils, FaStore, FaShoppingCart } from "react-icons/fa";

const DetailPage = () => {
  const { t, i18n } = useTranslation();
  const { option } = useParams();
  const [carouselImages, setCarouselImages] = useState([]);
  const [cards, setCards] = useState([]);

  const menuOptions = {
    menu: { text: t("menu"), icon: <FaUtensils size={80} /> },
    tiendas: { text: t("stores"), icon: <FaStore size={80} /> },
    carrito: { text: t("cart"), icon: <FaShoppingCart size={80} /> },
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/carrusel.json?key=7edd2060")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          image: item.image,
        }));
        setCarouselImages(formattedData.slice(0, 3));
      })
      .catch((error) => console.error("Error al cargar el carrusel:", error));
  }, []);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/parcial.json?key=7edd2060")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          image: item.image,
          title: item.food,
        }));
        setCards(formattedData.slice(0, 4));
      })
      .catch((error) => console.error("Error al cargar las cards:", error));
  }, []);

  return (
    <Container fluid>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          display: "flex",
          gap: "10px",
        }}
      >
        <Button variant="light" onClick={() => changeLanguage("es")}>
          🇪🇸 ES
        </Button>
        <Button variant="light" onClick={() => changeLanguage("en")}>
          🇺🇸 EN
        </Button>
      </div>

      <div
        className="titulo"
        style={{
          backgroundColor: "green",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {menuOptions[option]?.icon}
        {menuOptions[option]?.text}
      </div>

      <Carousel>
        {carouselImages.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              src={item.image}
              alt={`Slide ${index}`}
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="mt-4">
        <Row>
          {cards.map((item, index) => (
            <Col key={index} md={3}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default DetailPage;
