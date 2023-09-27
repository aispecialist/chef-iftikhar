import React from 'react'
import { NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <div className=' container bg-black text-white rounded p-2 card mb-0 text-center footer Footer'>&copy;  2023 :<NavLink className="text-success text-uppercase text-start text-decoration-none" to="me-waris.netlify.app">Rabbit Web</NavLink></div>
  )
}

export default Footer