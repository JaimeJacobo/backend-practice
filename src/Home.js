import React from 'react'
import {Link} from 'react-router-dom';

const Home = ()=>{
  return(
    <div>
      <h1>Bienvenido a la pagina web</h1>
      <button><Link to="/login">Ir a Login</Link></button>
      <button><Link to="/register">Ir a Register</Link></button>
    </div>
  )
}

export default Home