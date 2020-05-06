import React from 'react'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import {Route} from 'react-router-dom';

const Routes = ()=>{
  return(
    <div>
      <Route path='/' exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  )
}



export default Routes