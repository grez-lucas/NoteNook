import React from 'react';
import './CoursesView.css';

// Datos de ejemplo de asignaturas
const CoursesData = [
    {
      id: 1,
      title: 'Electricidad y Magnetismo',
      subtitle: 'Descifrando las Fuerzas Eléctricas y Magnéticas',
      notesCount: 5,
    },
    {
      id: 2,
      title: 'Estática',
      subtitle: 'Equilibrio en Reposo: La Ciencia de la Estática',
      notesCount: 3,
    },
    {
      id: 3,
      title: 'Termodinámica',
      subtitle: 'La Ciencia del Calor y la Energía',
      notesCount: 7,
    },
    {
      id: 4,
      title: 'Dinámica de Máquinas',
      subtitle: 'Mecánica de Máquinas y Mecanismos',
      notesCount: 6,
    },
    {
      id: 5,
      title: 'Ingeniería de Materiales',
      subtitle: 'Propiedades y Comportamiento de Materiales',
      notesCount: 4,
    },
    {
      id: 6,
      title: 'Diseño Estructural',
      subtitle: 'Estructuras y Cargas en Ingeniería Civil',
      notesCount: 9,
    },
    {
      id: 7,
      title: 'Mecánica de Fluidos',
      subtitle: 'Comportamiento de Fluidos en Ingeniería',
      notesCount: 8,
    },
    {
      id: 8,
      title: 'Ingeniería Eléctrica',
      subtitle: 'Fundamentos de Sistemas Eléctricos',
      notesCount: 5,
    },
    {
      id: 9,
      title: 'Automatización Industrial',
      subtitle: 'Control de Procesos en la Industria',
      notesCount: 7,
    },
    {
      id: 10,
      title: 'Sistemas de Comunicación',
      subtitle: 'Transmisión de Señales y Datos',
      notesCount: 6,
    },
  ];
  // Agregar más asignaturas según sea necesario


const CoursesView = () => {
  return (
    <div className="courses-view">
      <h1>View de Asignaturas</h1>
      <ul>
        {CoursesData.map((subject) => (
          <li key={subject.id} className="subject-item">
            <div className="subject-details">
              <h2>{subject.title}</h2>
              <p>{subject.subtitle}</p>
            </div>
            <div className="notes-count">
              <p>{subject.notesCount} Apuntes</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesView;