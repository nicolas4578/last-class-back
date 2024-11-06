import { createContext, useEffect, useState} from 'react'

//crear contexto
const ComentariosContexto = createContext()

//crear provider: para que el contexto se reconozca en todo componente
export const ComentariosProvider = ({ children}) => {
    const [comments, setComments] = useState()
    useEffect(()=>{
        fetchComentarios()
    },[])    
//funcion para traer los comentarios desde json server 
const fetchComentarios = async() => {
    const response = await fetch('http://localhost:5000/comentarios/')
    const comentariosAPI = await response.json()
    setComments(comentariosAPI)


}

const borrarItem = async (id) => {
    if (window.confirm("¿Estás seguro de borrar el comentario?")) {
        try {
            // Hacer la solicitud DELETE a la API
            const response = await fetch(`http://localhost:5000/comentarios/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Si la respuesta es exitosa, actualizamos el estado local
                setComments(comments.filter((c) => c.id !== id));
                console.log(`Comentario con id ${id} eliminado de la API`);
            } else {
                // Si hubo un error al eliminar en la API
                console.error('Error al eliminar el comentario en la API');
            }
        } catch (error) {
            console.error('Hubo un error al hacer la solicitud DELETE:', error);
        }
    }
};

    return <ComentariosContexto.Provider value={{ comments, setComments, borrarItem }}>
        { children }
    </ComentariosContexto.Provider>
}

export default ComentariosContexto