import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from './components/accounts/loginForm';
import Start from './Started'

const Routes = () => {
    
    
  return (            <div>
                
  <BrowserRouter>
  <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={LoginForm} />

     
     
        <Redirect to="/" />
    </Switch>
  </BrowserRouter>
            </div>
        )
    }


export default Routes
