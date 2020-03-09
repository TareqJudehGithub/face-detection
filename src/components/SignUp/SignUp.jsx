import React from "react";
import {Link} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.style.css";


const SignUp = () => {
     return(
          <div className="form-signup-container ">
               <nav></nav>
               <Form className="sign-up-form">
                    <p className="title">Sign In</p>
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="form-input" size="sm"type="text" placeholder="Enter your name" />

                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control className="form-input" size="sm" type="email" placeholder="Enter email" width="10"/>
   
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="form-input" size="sm"type="password" placeholder="Password" />

                    <Button 
                    variant="outline-secondary" size="sm" id="signmeup-btn"
                    onClick={() =>  console.log("to home page")}
                    ><Link to="/">Sign Up</Link></Button>              
               </Form>
          </div>
     )
}

export default SignUp;
