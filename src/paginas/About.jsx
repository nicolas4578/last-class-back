import React from 'react'
import Card from '../componentes/Card'
import { Link } from 'react-router-dom'
import VolverHome from '../componentes/VolverHome'

const About = ({titulo, autor, ficha}) => {
  return (
    <Card>
        <div className='about reverse'>
            <h1>Acerca de este proyecto</h1>
            <h1>Esta es una app en react</h1>
            <p>Titulo: {titulo}</p>
            <p>Autor: {autor}</p>
            <p>Ficha: {ficha}</p>
            <p><b>Version: </b>1.00</p>
        </div>
        {/* <VolverHome/> */}
    </Card>
    )
}

export default About