import React from 'react'
import { ComentarioItem } from './ComentarioItem'

const ComentarioLista = ({comments, handleDelete}) => {


    if(comments.length===0 || !comments){
        return <p>No hay comentarios</p>
    }
    else{
        return (
            <div className='comments'>
            <ul>
                {
                    comments.map(comentario => 
                        <ComentarioItem 
                        key={comentario.id}
                        calificacion={comentario.calificacion}
                        comentario={comentario.comentario}
                        id={comentario.id}
                        handleDelete={handleDelete}
                        />
                    )
                }
            </ul>
        </div>
          )
    }
  
}

export default ComentarioLista