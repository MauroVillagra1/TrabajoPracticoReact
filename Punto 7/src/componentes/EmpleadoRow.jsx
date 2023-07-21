import React from 'react';
import EmpleadoAvatar from './EmpleadoAvatar';
import "../estilos/EmpleadoRow.css"

const EmpleadoRow = ({ empleado }) => {
  return (
    <div className="d-flex conteiner-center background-list">
      <div className="row conteiner-fluid d-flex conteiner-center">
        <div className="col-6 conteiner-imagen conteiner-center">
          <div>
            <EmpleadoAvatar src={empleado.pic} />
          </div>
        </div>
        <div className="col-6 conteiner-text d-flex align-items-center conteiner-center">
          <div className="d-flex flex-column conteiner-center">
            <h5>{empleado.fullName}</h5>
            <p>{empleado.title}</p>
            <div className='background-departament'>
            <p className='background-departament'>{empleado.department}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoRow;
