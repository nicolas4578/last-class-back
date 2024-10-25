import React from 'react'
import { Link } from 'react-router-dom'
import { FaHouse } from 'react-icons/fa6'

const VolverHome = () => {
  return (
    <div className='about-link'>
    <Link to="/"><FaHouse size={30}/>
    </Link>
</div>

  )
}

export default VolverHome