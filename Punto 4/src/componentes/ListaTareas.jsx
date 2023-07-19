import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ListaTareas = ({ listaTareas, setListaTareas }) => {
  const handleBorrarTarea = (indexABorrar) => {
    // Filtrar las tareas para eliminar la tarea seleccionada por índice
    const nuevasTareas = listaTareas.filter((_, index) => index !== indexABorrar);
    // Actualizar la lista de tareas con la tarea eliminada
    setListaTareas(nuevasTareas);
  };

  return (
    <ListGroup>
      {listaTareas.map((tarea, index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between">
          {tarea}
          <Button variant="danger" onClick={() => handleBorrarTarea(index)}>
            Borrar
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
