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
  const handleSubmit = async (event) => {
    event.preventDefault();

    let classnote_id = 1;
    // Realizar la solicitud PUT para obtener la URL de carga del archivo

    const formDataAPI = new FormData();
    formDataAPI.append("file_upload", archivo);
    const apiResponse = await fetch(`http://localhost:4004/classnotes/${classnote_id}/files`, {
      method: 'POST',
      body: formDataAPI
    });

    if (!apiResponse.ok) {
      console.error('Error al obtener la URL de carga del archivo');
      return;
    }

    const apiResult = await apiResponse.json();
    const { url, fields } = apiResult;

    // Crear un objeto FormData para enviar el archivo
    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('file', archivo);

    // Realizar la solicitud POST con el archivo adjunto
    const s3Response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!s3Response.ok) {
      console.error('Error al subir el archivo');
      return;
    }

    console.log('Archivo subido exitosamente');
  };

  return (
    <div>
      <h1>Subir Archivo</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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