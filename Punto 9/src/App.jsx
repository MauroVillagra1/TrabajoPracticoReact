import React from "react";
import FormularioCita from "./componentes/FormularioCita";
import CardPaciente from "./componentes/CardPaciente";
import CitasLocalStorage from "./componentes/CitasLocalStorage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { citas, agregarCita, eliminarCita } = CitasLocalStorage();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Llenar el formulario para completar cita</h1>
      <FormularioCita agregarCita={agregarCita} />
      <div className="mt-5">
        {citas.length === 0 ? (
          <p>No hay citas registradas</p>
        ) : (
          citas.map((cita, index) => (
            <CardPaciente
              key={index}
              cita={cita}
              onDelete={() => eliminarCita(cita)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
