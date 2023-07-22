// components/CardPelicula.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

const CardPelicula = ({ pelicula }) => {
  return (
    <Card className="my-3 ">
      <Card.Body>
        <Card.Title className='fs-5'>Nombre de Pelicula: {pelicula.nombre}</Card.Title>
        <Card.Text className="fs-5">Genero: {pelicula.genero}</Card.Text>
        <Card.Text className='fs-5'>Descripción: {pelicula.descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPelicula;
