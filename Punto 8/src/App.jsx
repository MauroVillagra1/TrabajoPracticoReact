import React from "react";
import TituloFormulario from "./componentes/TituloFormulario";
import Formulario from "./componentes/Formulario";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TituloFormulario />
        <Formulario />
      </header>
    </div>
  );
}

export default App;
