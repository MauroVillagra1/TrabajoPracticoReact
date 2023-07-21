import React, { useState } from "react";

const FormularioCita = ({ agregarCita }) => {
  const [formData, setFormData] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { mascota, dueño, fecha, hora, sintomas } = formData;

    if (mascota && dueño && fecha && hora && sintomas) {
      agregarCita(formData);
      setFormData({
        mascota: "",
        dueño: "",
        fecha: "",
        hora: "",
        sintomas: "",
      });
    } else {
      alert("Completar todos los datos");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-100 mx-auto">
      <div className="mb-3">
        <label htmlFor="mascota" className="form-label">
          Nombre de mascota:
        </label>
        <input
          type="text"
          className="form-control"
          id="mascota"
          name="mascota"
          value={formData.mascota}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dueño" className="form-label">
          Nombre de dueño:
        </label>
        <input
          type="text"
          className="form-control"
          id="dueño"
          name="dueño"
          value={formData.dueño}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fecha" className="form-label">
          Fecha:
        </label>
        <input
          type="date"
          className="form-control"
          id="fecha"
          name="fecha"
          value={formData.fecha}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="hora" className="form-label">
          Hora:
        </label>
        <input
          type="time"
          className="form-control"
          id="hora"
          name="hora"
          value={formData.hora}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sintomas" className="form-label">
          Síntomas:
        </label>
        <textarea
          className="form-control"
          id="sintomas"
          name="sintomas"
          value={formData.sintomas}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar cita
      </button>
    </form>
  );
};

export default FormularioCita;
