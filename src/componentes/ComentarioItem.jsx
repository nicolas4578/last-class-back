import { React, useContext } from 'react';
import { FaTimes } from "react-icons/fa";
import ComentariosContexto from '../contexto/comentariosContexto';
import Card from './Card';

export const ComentarioItem = ({ comentario }) => {
  const { borrarItem } = useContext(ComentariosContexto); // Obtener borrarItem del contexto

  // Función para manejar la eliminación
  const handleEliminar = () => {
    borrarItem(comentario.id); // Llamar a borrarItem con el id del comentario
  };

  return (
    <Card reverse={false}>
      <div className='num-display'>{comentario.calificacion}</div>
      <div className='text-display'>{comentario.comentario}</div>
      <button className='close' onClick={handleEliminar}>
        <FaTimes color='purple' />
      </button>
    </Card>
  );
};
