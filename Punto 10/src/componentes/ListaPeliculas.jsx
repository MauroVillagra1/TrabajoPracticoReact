import React, { useState, useEffect } from "react";
import CardPelicula from "./CardPelicula";

const ListaPeliculas = ({ peliculas, setPeliculas }) => {

  useEffect(() => {
    const peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas"));
    if (peliculasGuardadas) {
      setPeliculas(peliculasGuardadas);
    }
  }, []);
  
  


  return (
    <div>
      {peliculas.map((pelicula, index) => (
        <CardPelicula key={index} pelicula={pelicula} />
      ))}
    </div>
  );
};

export default ListaPeliculas;
