import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

import image from "./green-salad.jpg";

function LoginPage() {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const validateInputs = () => {
    let isValid = true;

    if (!username.trim()) {
      setUsernameError(t("usernameRequired"));
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!password.trim()) {
      setPasswordError(t("passwordRequired"));
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError(t("passwordMin"));
      isValid = false;
    } else if (password.length > 7) {
      setPasswordError(t("passwordMax"));
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      navigate("/home");
    }
  };

  return (
    <Container fluid className="vh-100">
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

      <Row className="h-100">
        <Col
          md={7}
          className="d-flex flex-column justify-content-center align-items-center text-black"
        >
          <div className="text-center">
            <h1 className="display-4 fw-bold">TOO GOOD TO GO</h1>
            <p className="lead" style={{ color: "orange" }}>
              {t("foodWastingSolution")}
            </p>
            <Image
              src={image}
              alt="Logo del sitio"
              width={150}
              className="mb-4"
            />
          </div>
        </Col>

        <Col
          md={5}
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: "green" }}
        >
          <Card
            style={{ width: "80%", border: "none", backgroundColor: "green" }}
          >
            <Card.Body className="p-5">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder={t("usernamePlaceholder")}
                    className="py-2 rounded-pill"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {usernameError && (
                    <p className="text-danger">{usernameError}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="password"
                    placeholder={t("passwordPlaceholder")}
                    className="py-2 rounded-pill"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && (
                    <p className="text-danger">{passwordError}</p>
                  )}
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 rounded-pill py-2"
                  variant="light"
                >
                  {t("login")}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
