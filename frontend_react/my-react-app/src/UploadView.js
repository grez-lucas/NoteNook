import React, { useState } from 'react';
import './UploadView.css'; 

const UploadView = () => {
  // Estados para gestionar el nombre, descripción y archivo seleccionado
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [archivo, setArchivo] = useState(null);

  // Manejador de cambios para el campo de nombre
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  // Manejador de cambios para el campo de descripción
  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  // Manejador de cambios para el input de archivo
  const handleArchivoChange = (event) => {
    // Aquí puedes realizar validaciones adicionales si es necesario
    setArchivo(event.target.files[0]);
  };

  // Manejador para enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar la lógica para subir el archivo y guardar la información
    // Puedes utilizar bibliotecas como axios o fetch para enviar el archivo al servidor

    // Ejemplo de cómo mostrar la información en la consola
    console.log('Nombre:', nombre);
    console.log('Descripción:', descripcion);
    console.log('Archivo:', archivo);
  };

  return (
    <div>
      <h1>Subir Archivo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={handleNombreChange} />
        </label>
        <br />
        <label>
          Descripción:
          <textarea value={descripcion} onChange={handleDescripcionChange} />
        </label>
        <br />
        <label>
          Archivo:
          <input type="file" onChange={handleArchivoChange} />
        </label>
        <br />
        <button type="submit">Subir Archivo</button>
      </form>
    </div>
  );
};

export default UploadView;