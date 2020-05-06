import React from 'react'
import {Link} from 'react-router-dom';

const Login = ()=>{
  return(
    <div>
      <h2>Login</h2>
      <button><Link to="/">Ir a Home</Link></button>
      <button><Link to="/register">Ir a Register</Link></button>     
    </div>
  )
}

export default Login