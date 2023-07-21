import React from 'react';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = ({ empleados }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Lista de Empleados</h1>
          {empleados.map((empleado) => (
            <EmpleadoRow key={empleado.id} empleado={empleado} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpleadoList;
