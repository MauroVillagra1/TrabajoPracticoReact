import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ tarea, onDelete, index }) => {
  const handleBorrar = () => {
    onDelete(index);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}
      <Button variant="danger" onClick={handleBorrar}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
