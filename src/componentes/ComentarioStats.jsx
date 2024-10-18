import React from 'react';

export default function ComentarioStats({ comentarios }) {

  const totalComentarios = comentarios.length;

  const promedio = totalComentarios > 0 ? comentarios.reduce((acc, comentario) => acc + comentario.calificacion, 0) / totalComentarios : 0;

  // let totalPromedio=
  return (
    <div className='feedback-stats'>
      <h4>Comentarios: {totalComentarios}</h4>
      <h4>Calificación promedio: {promedio.toFixed(2)}</h4>
    </div>
  );
}
