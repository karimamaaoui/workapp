import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from './components/authentification/loginForm';
import Start from './Started'
import RegisterForm from './components/authentification/registerForm';
import ListOfJobs from './components/job/listOfJobs'
import Profile from './components/accounts/profile'
import FormComponent from './components/accounts/updateProfile/formComponent';

const Routes = () => {
    
    
  return (            <div>
                
  <BrowserRouter>
  <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={LoginForm} />

        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/jobsList" component={ListOfJobs} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/editProfile" component={FormComponent} />
     
        <Redirect to="/" />
    </Switch>
  </BrowserRouter>
            </div>
        )
    }


export default Routes
