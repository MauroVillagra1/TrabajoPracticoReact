import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import LocalStorage from './LocalStorage';

const FormularioPeliculas = ({ onPeliculaAgregada }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [genero, setGenero] = useState('comedia');



  
  const handleSubmit = (e) => {
    e.preventDefault();
    LocalStorage.guardarPelicula({ nombre, descripcion, genero });
    onPeliculaAgregada({ nombre, descripcion, genero });
    setNombre('');
    setDescripcion('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId="descripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId="genero">
        <Form.Label>Género</Form.Label>
        <Form.Control
          as="select"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        >
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="infantil">Infantil</option>
        </Form.Control>
      </Form.Group>

      <Button className='mt-3 text-white' variant='info' type="submit">Enviar</Button>
    </Form>
  );
};

export default FormularioPeliculas;
