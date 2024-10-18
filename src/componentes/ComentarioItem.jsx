import {React, useState} from 'react'
import Card from './Card'
import { FaTimes } from "react-icons/fa";
export const ComentarioItem = ({comentario, calificacion,id,handleDelete}) => {

    //manejo del estado de un comentario:
    //comentario y calificacion como atributo
    //mediante el uso de Estados
    const [comment, setComentario] = useState(comentario)
    const [rating, setRating] = useState(calificacion)
    const[identificacion,setIde]=useState(id)


  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{ comment }</div>
      <button className='close' onClick={()=>handleDelete(identificacion)}>
        <FaTimes color='purple' />
      </button>
    </Card>
    // <div className="card">
    //     <div className='num-display'>{rating}</div>
    //     <div className='text-display'>{ comment }</div>
    //     <button onClick={cambiarRating}>
    //         Cambiar Calificacion
    //     </button>
    // </div>
  )
}
