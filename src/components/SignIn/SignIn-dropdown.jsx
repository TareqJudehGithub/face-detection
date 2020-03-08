import React from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignIn-dropdown.style.css"

const SignIn = () => {
     return(
          <div className="form-container center">
               <Form className="sign-in-form">
                    
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control className="form-input" size="sm" type="email" placeholder="Enter email" width="10"/>
                    <Form.Text className="text-muted">
                         
                    </Form.Text>            
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="form-input" size="sm" type="password" placeholder="Password" />             
                    <div className="btn-and-new">
                    <Button 
                    variant="outline-secondary" size="sm" id="signin-btn"
                    >Submit</Button>
                   
                    <span className="register-link">New user? Sign up now!</span>
                    </div>
                    
                    
                    
                    
               </Form>
          </div>
     )
}

export default SignIn;
