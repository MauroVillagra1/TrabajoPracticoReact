import React, { useState } from "react";

const Formulario = () => {
  const initialFormData = {
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { nombre, apellido, dni, email } = formData;

    if (nombre && apellido && dni && email) {
      alert("Datos enviados");
      setFormData(initialFormData); 
      setError(""); 
    } else {
      setError("Completar todos los datos"); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-100 mx-auto">
      <div>
        <label htmlFor="nombre" className="form-label">
          Nombre:
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">
          Apellido:
        </label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleInputChange}
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dni" className="form-label">
          DNI:
        </label>
        <input
          type="text"
          className="form-control"
          id="dni"
          name="dni"
          value={formData.dni}
          onChange={handleInputChange}
          maxLength={8}
          pattern="[0-9]{8}" 
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>} 
      <button type="submit" className="btn btn-success">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
