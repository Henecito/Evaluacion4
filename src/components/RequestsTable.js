import React from 'react';

const RequestsTable = ({ requests, editRecord, deleteRecord }) => {
  return (
    <div>
      <h2 className="text-center my-5">Tabla de datos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Número</th>
            <th>Tipo de Servicio</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.email}</td>
              <td>{request.phone}</td>
              <td>{request.serviceType}</td>
              <td>{request.problemDescription}</td>
              <td>
                <button className="btn btn-warning mr-2" onClick={() => editRecord(request)}>Editar</button>
                <button className="btn btn-danger" onClick={() => deleteRecord(request.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsTable;