import React, {useState} from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignIn-dropdown.style.css"
import {withRouter, Link, Redirect} from "react-router-dom";
import $ from "jquery";


const SignIn = ({ history, onSignIn }) => {

     // const [route, setRoute] = useState("signIn");
     const closeSignIn = () => {
          $(document).ready(function(){
               $("#Form").fadeOut("#Form");
          });
     }
    
     return(
         
          <div className="form-signin-container center" id="Form">
             
               <Form>
                    <p className="title">Sign In</p>
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control className="form-input" size="sm" type="email" placeholder="Enter email" width="10"/>
                    <Form.Text className="text-muted">
                         
                    </Form.Text>            
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="form-input" size="sm" type="password" placeholder="Password" />             
                   
                    <Button 
                    variant="outline-secondary" size="sm" id="signin-btn"
                    
                    onClick={() => {   
                         if(closeSignIn){
                              closeSignIn();
                         }                        
                         history.push("/");                         
                         console.log("to home from Sign in");
                         }}>
                         Submit
                    </Button>
                   
                    <span className="register-link"
                     onClick={() => { 
                         console.log("to Sign Up");  
                         if(closeSignIn){
                              closeSignIn();
                         }}}
                         
                    >New user? Sign up 
                    <Link to="/SignUp"

                    > now!</Link>     
                    </span>  
                    
               </Form>                       
          </div>
     )
}




export default withRouter(SignIn);

