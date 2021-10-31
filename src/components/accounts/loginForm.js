import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';



class loginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            username: '',
            password: '',
            message: '',
            error: {
                email: '',
                username: ''
            }
        }
    }
 

    render() {



    return (
              
        <div className="login-form">
            <div className="main">
                <div className="content">
                    <h2>Login</h2>
              

            <form  onSubmit={this.onFormSubmit } >
               
                <div >
                    <label className="labelsign">Username</label>
                    <input
                        required
                        type="text"
                        name="username"
                      />
                      </div>

                <div >
                            <label className="labelsign">Password</label>
                            <input
                                required
                                type="password"
                                name="password"/>

               
        </div>

             
                <div>
                <button type="submit" value="submit"  >submit</button>
            </div>
                            <br/>
            <div className="alreadyhave">
            Don't  have  an account  {'   '}        
            <Link to='/register'>
                Register here
            </Link>
            </div>

            </form> 
                </div>

          
            </div>

    </div>
);}

}

export default loginForm
