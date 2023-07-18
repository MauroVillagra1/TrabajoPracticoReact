import React, { useState } from 'react';
import Mensaje from './componentes/mensaje';
import BotonMensaje from './componentes/boton';
import './App.css';

function App() {
  const [msj, setMsj] = useState();

  const handleClick = () => {
    setMsj('(from changed state)');
  };

  return (
    <div className="App">
      <Mensaje message={msj} />
      <BotonMensaje handleClick={handleClick} />
    </div>
  );
}

export default App;