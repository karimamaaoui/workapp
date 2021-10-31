import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from './components/accounts/loginForm';
import Start from './Started'
import RegisterForm from './components/accounts/registerForm';
import ListOfJobs from './components/job/listOfJobs'

const Routes = () => {
    
    
  return (            <div>
                
  <BrowserRouter>
  <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={LoginForm} />

        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/jobsList" component={ListOfJobs} />
     
     
        <Redirect to="/" />
    </Switch>
  </BrowserRouter>
            </div>
        )
    }


export default Routes
