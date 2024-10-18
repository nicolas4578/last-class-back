import React, { useState } from 'react';
import Card from './componentes/Card';
import ComentarioLista from './componentes/ComentarioLista';
import Header from './componentes/Header';
import comentarios from './data/Comentarios';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
function App() {

    const [comments, setCommments] = useState(comentarios)

    const borrarItem =(id) => {
        if (window.confirm("Esta seguro de borar el comentario?")){
            console.log(`App ${id}`)
            //asignar nuevo estado a comments
            //aplicar filter para quitar los comentarios
            //cuyo id concuerde con el parametro
            setCommments(comments.filter((c)=> c.id !== id))
        }
    }

    const titulo="App de comentarios"
    const Autor ="Miguel Ortiz y Nicolas Fandiño"
    const Ficha = 2902093
    const CentroF = "SENA CGMLTI"

    const loading = false;
    if(loading === true) return ( <h1> Cargando comentarios...</h1> )

    const addComentario=(newComentario)=>{
      setCommments( preventComments=>[ ...preventComments,newComentario ])
    }

  return (
    <div
     className='container'>
        <Header titulo={titulo} autor={Autor} ficha={Ficha} centrof={CentroF}/>
        <ComentarioForm handleAdd={addComentario}/>
        <ComentarioStats
        comentarios={comments}
        />
        <ComentarioLista 
        comments={comments}
        handleDelete={borrarItem}/>
    </div>

  )
}

export default App