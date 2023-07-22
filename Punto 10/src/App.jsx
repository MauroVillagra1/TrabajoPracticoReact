import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormularioPeliculas from './componentes/FormularioPeliculas';
import ListaPeliculas from './componentes/ListaPeliculas';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap


const App = () => {
  const [peliculas, setPeliculas] = useState([]);
  const agregarPelicula = (nuevaPelicula) => {
    setPeliculas([...peliculas, nuevaPelicula]);
    
    
  };
 

  return (
    <Container className='background-page'>
      <Row>
        <Col>
        <h1 className='mb-3 text-center text-white '>Lista de Peliculas</h1>
          <FormularioPeliculas onPeliculaAgregada={agregarPelicula} /> 
        </Col>
      </Row>
      <Row>
        <Col>
          <ListaPeliculas peliculas={peliculas} setPeliculas={setPeliculas} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
