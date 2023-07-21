import React from "react";
import "../estilos/CardPaciente.css"
import { Button } from "react-bootstrap";
const CardPaciente = ({ cita, onDelete }) => {
  const { mascota, dueño, fecha, hora, sintomas } = cita;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="card-title-bg p-3" >
        <p className="card-title">Mascota: {mascota}</p>
        <p className="card-title">Dueño: {dueño}</p>
        </div>
        <div className="card-text-bg p-3 justify-content-end"> 
        <p className="card-text">Fecha: {fecha}</p>
        <p className="card-text">Hora: {hora}</p>
        <p className="card-text">Síntomas: {sintomas}</p>
        <Button className="btn-delete " onClick={() => onDelete(cita)}>
          Borrar
        </Button>
        </div>
       
      
      </div>
    </div>
  );
};

export default CardPaciente;
