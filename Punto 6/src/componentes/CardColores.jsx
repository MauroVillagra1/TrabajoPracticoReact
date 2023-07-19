import React from "react";
import { Card, Button } from "react-bootstrap";

const CardColores = ({ nombreColor, color, onBorrar, index }) => {
  const handleBorrar = () => {
    onBorrar(index);
    console.log("borrar");
  };

  return (
    <Card style={{ width: "18rem", margin: "10px" }} className="mx-auto">
  <Card.Body className="text-center">
    <Card.Title>{nombreColor}</Card.Title>
    <div style={{ display: "flex", margin: "auto" ,alignItems: "center", backgroundColor: nombreColor, height: "100px", width: "100px", marginBottom: "10px", border: "2px solid black" }}></div>

    <Button className="mt-3" variant="danger" onClick={handleBorrar}>
      Borrar
    </Button>
  </Card.Body>
</Card>

  );
};

export default CardColores;
