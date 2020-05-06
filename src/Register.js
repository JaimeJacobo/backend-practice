import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

const Register = ()=>{

  const [myState, updateMyState] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    email: ''
  })

  const [myFetchedInfo, updateMyFetchedInfo] = useState([])

  const callTheAPI = (event)=>{

    event.preventDefault()

    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myState)
      }
    )
    .then((data)=>{
      return data.json()
    })
    .then((dataJSON)=>{
      console.log(dataJSON)
      updateMyFetchedInfo(dataJSON)
    })
  }

  return(
    <div>
      <h2>Register</h2>

      <button><Link to="/">Ir a Home</Link></button>
      <button><Link to="/login">Ir a Login</Link></button>

      <form>
        <input type="text" name="name" placeholder="Name" onChange={ event => updateMyState({...myState, name: event.target.value})}/>
        <input type="password" name="password" placeholder="Password" onChange={ event => updateMyState({...myState, password: event.target.value})}/>
        <input type="password" name="confirmPassword" placeholder="Repeat Password" onChange={ event => updateMyState({...myState, confirmPassword: event.target.value})}/>
        <input type="text" name="email" placeholder="Email" onChange={ event => updateMyState({...myState, email: event.target.value})}/>

        <button onClick={(event)=>callTheAPI(event)}>Crear</button>
      </form>
      {
        myFetchedInfo.map((message, index)=>{
          return(
            <div key={index}>
              <p>{message.msg}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Register