import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from './components/authentification/loginForm';
import Start from './Started'
import RegisterForm from './components/authentification/registerForm';
import ListOfJobs from './components/job/listOfJobs'
import Profile from './components/accounts/profile'
import FormComponent from './components/accounts/updateProfile/formComponent';
import ProtectedRoute from "./ProtectedRoute";
import UseAuth from "./useAuth";
import ListOfOffres from '../src/components/offres/listOfOffres'
import ReadOffre from "././components/offres/ReadOffre"


const Routes = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData,setUserData]=useState(null);
  
  const handleRegister =(data)=>{
    setUserData(data);
    setIsAuthenticated(true);
  }
  
  
  const handleLogout =()=>{
    setUserData(null);
    setIsAuthenticated(false);
  }
  return (           
  <div>
                
  <BrowserRouter>
  <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={LoginForm} />

        <Route exact path="/register" component={RegisterForm}/>
        <Route exact path="/jobsList" component={ListOfJobs} />
        <ProtectedRoute exact path="/editProfile"> <FormComponent/> </ProtectedRoute>
        <ProtectedRoute exact path="/profile">
          <Profile />
        </ProtectedRoute>

        

        <ProtectedRoute exact path="/offres"> <ListOfOffres/> </ProtectedRoute>
        <ProtectedRoute exact path="/offredetails/:id"> <ReadOffre/> </ProtectedRoute>


      <Route path="*">
            <div>404 Not found </div>
          </Route>
        <Redirect to="/" />
    </Switch>
  </BrowserRouter>
            </div>
        )
    }


export default Routes
