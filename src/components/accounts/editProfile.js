import React, { Component } from 'react'
import UserDetails from './FormPersonalDetails'
import PersonalDetails from './FormUserDetails';
import Confirmation from './Confirmation'
import Success from './Success';
import './profile.css'

export class EditProfile extends Component {

    state ={
        step:1,
        email:'',
        username:'',
        password:'',
        firstName:'',
        lastName:'',
        birthday:'',
        levelOfEducation:''

    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
      }

      nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
      }  
    handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

      
    render() {
        const { step } = this.state;
        const {firstName,lastName, email, username, password,city,birthday, levelOfEducation } = this.state;
        const values = {firstName,lastName, email, username, password,city,birthday,levelOfEducation }
        switch (step) {
            case 1: 
              return (
                <UserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
              )
            case 2: 
              return (
                <PersonalDetails 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}  
                
                />
              )
            case 3: 
              return (
                <Confirmation 
                
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
              )
              case 4:
              return <Success />;
              default:
                (console.log('This is a multi-step form built with React.'))
          }
    }
}

export default EditProfile
