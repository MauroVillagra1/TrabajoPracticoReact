import React, { useState, useEffect } from "react";
import "./Formulario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import ListaColores from "./ListaColores";

const FormularioColores = () => {
  const [nombreColor, setNombreColor] = useState("");
  const [color, setColor] = useState("#FFFFFF");
  const [coloresList, setColoresList] = useState([]);


  useEffect(() => {
    const storedColoresList = JSON.parse(localStorage.getItem("colores"));
    console.log(coloresList);
    if (storedColoresList) {
      setColoresList(storedColoresList);
    }
  }, []);
 
  const handleNombreColorChange = (e) => {
    const nombreSinEspacios = e.target.value.replace(/\s/g, ""); // Quita los espacios en blanco
    setNombreColor(nombreSinEspacios);
    setColor(nombreSinEspacios);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarColor();
  };

  const agregarColor = () => {
    const nombreLowerCase = nombreColor.toLowerCase().trim();
    const nuevoColor = {
      nombre: nombreLowerCase,
      color: nombreLowerCase,
    };

    if (!coloresList.some((color) => color.nombre === nombreLowerCase)) {
      setColoresList([...coloresList, nuevoColor]);
    }

    setNombreColor("");
    setColor(nuevoColor.color);
  };

  const borrarColor = (index) => {
    const nuevaListaColores = [...coloresList];
    nuevaListaColores.splice(index, 1);
    setColoresList(nuevaListaColores);
  };

  useEffect(() => {
    if (coloresList.length > 0) {
      localStorage.setItem("colores", JSON.stringify(coloresList));
    }
    else {
      localStorage.removeItem("colores"); 
    }
  }, [coloresList]);
 

  return (
    <div>
      <form
        className="formcolor d-flex border border-2 border-black"
        onSubmit={handleSubmit}
      >
        <div className="formtop">
          <div
            className="cuadrado border border-2 border-black"
            style={{
              backgroundColor: nombreColor,
            }}
          ></div>
          <input
            type="text"
            value={nombreColor}
            onChange={handleNombreColorChange}
            placeholder="Ingrese el nombre del color"
            style={{ marginRight: "10px", width: "200px", height: "30px" }}
          />
        </div>
        <div className="formbuttom d-block">
          <Button className="buttonform" variant="success" type="submit">
            Agregar
          </Button>
        </div>
      </form>
      <ListaColores colores={coloresList} onBorrar={borrarColor} />
    </div>
  );
};

export default FormularioColores;
