import React from "react";
import { Card } from "react-bootstrap";
import { FaUtensils, FaStore, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import fondo from "./manu.avif";

const MenuComponent = () => {
  const navigate = useNavigate();

  const menuOptions = [
    { id: "menu", text: "Menu", icon: <FaUtensils size={80} />, color: "red" },
    { id: "tiendas", text: "Stores", icon: <FaStore size={80} />, color: "blue" },
    { id: "carrito", text: "Card", icon: <FaShoppingCart size={80} />, color: "green" },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "400px",
          borderRadius: "20px",
          padding: "20px",
          textAlign: "center",
          background: "linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 0, 0, 0.8))",
          color: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {menuOptions.map((option) => (
            <div
              key={option.id}
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => navigate(`/detail/${option.id}`)}
            >
              {option.icon}
              <p style={{ marginTop: "10px", fontSize: "20px", fontWeight: "bold" }}>
                {option.text}
              </p>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuComponent;
