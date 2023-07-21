import { useEffect, useState } from "react";

const CitasLocalStorage = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasGuardadas = JSON.parse(localStorage.getItem("citas"));
    if (citasGuardadas) {
      setCitas(citasGuardadas);
    }
  }, []);

  const guardarCitasEnLocalStorage = (nuevasCitas) => {
    localStorage.setItem("citas", JSON.stringify(nuevasCitas));
    setCitas(nuevasCitas);
  };

  const agregarCita = (nuevaCita) => {
    guardarCitasEnLocalStorage([...citas, nuevaCita]);
  };

  const eliminarCita = (cita) => {
    const nuevasCitas = citas.filter((c) => c !== cita);
    guardarCitasEnLocalStorage(nuevasCitas);
  };

  return { citas, agregarCita, eliminarCita };
};

export default CitasLocalStorage;
