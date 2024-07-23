import React, { useState, useEffect } from 'react';

const RequestForm = ({ addNew, editMode, editData, updateRecord }) => {
  const valoresIniciales = {
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    problemDescription: ''
  };

  const [formData, setFormData] = useState(valoresIniciales);

  useEffect(() => {
    if (editMode) {
      setFormData(editData);
    } else {
      const savedData = JSON.parse(localStorage.getItem('requestForm'));
      if (savedData) {
        setFormData(savedData);
      }
    }
  }, [editMode, editData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      updateRecord(formData);
    } else {
      const id = new Date().getTime();
      addNew({ ...formData, id });
    }
    setFormData(valoresIniciales);
    alert('Datos Ingresados Correctamente!');
  };

  return (
    <form onSubmit={handleSubmit} className="text-center my-5">
      <h2>{editMode ? 'Editar servicio' : 'Solicitar un servicio'}</h2>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="phone"
          className="form-control"
          placeholder="Nùmero"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <select
          name="serviceType"
          className="form-control"
          value={formData.serviceType}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un Servicio</option>
          <option value="Cambio de Pantalla">Cambio de Pantalla</option>
          <option value="Cambio de Bateria">Cambio de Bateria</option>
          <option value="Cambio de Chasis">Cambio de Chasis</option>
          <option value="Reparación de Computadores">Reparación de Computadores</option>
          <option value="Mantencion de consolas">Mantencion de consolas</option>
        </select>
      </div>
      <div className="form-group">
        <textarea
          name="problemDescription"
          className="form-control"
          placeholder="Descripción del servicio"
          value={formData.problemDescription}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {editMode ? 'Actualizar' : 'Guardar'}
      </button>
    </form>
  );
};

export default RequestForm;