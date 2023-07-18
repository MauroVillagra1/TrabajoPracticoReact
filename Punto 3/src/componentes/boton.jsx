import React from 'react';
import Button from 'react-bootstrap/Button';

function BotonMensaje(props) {
  return (
    <Button variant="primary" onClick={props.handleClick}>
      Mostrar Mensaje
    </Button>
  );
}

export default BotonMensaje;