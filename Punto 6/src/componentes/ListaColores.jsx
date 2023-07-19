import React from "react";
import CardColores from "./CardColores";

const ListaColores = ({ colores, onBorrar }) => {
  return (
    <div className="d-flex flex-wrap w-100 justify-content-center">
      {colores.map((color, index) => (
        <CardColores 
          key={index}
          nombreColor={color.nombre}
          color={color.color}
          onBorrar={() => onBorrar(index)} 
        />
      ))}
    </div>
  );
};

export default ListaColores;
