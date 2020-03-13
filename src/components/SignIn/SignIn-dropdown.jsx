import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignIn-dropdown.style.css"
import {withRouter, Link} from "react-router-dom";

const SignIn = ({ history, routeChange }) => {
    const [signInEmail, setsignInEmail] = useState("");
    const [signInPassword, setsignInPassword] = useState("");

     
     const onEmailChange = (event) => {
          setsignInEmail(event.target.value);
     };
     const onPasswordChange = (event) => {
          setsignInPassword(event.target.value);
     };
     const onsubmitSigninHandler = () => {
          console.log(signInEmail, signInPassword);
          fetch("http://localhost:4000/profile/signin", {
               //posting email and password to the DB:
               method: "post",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify({
                    email: signInEmail,
                    password: signInPassword
               })
          })
          .then(respone => respone.json())
          .then(data => {
               if(data === "Signing was successful!!") {             
                    history.push("/");
                    console.log("sign-up was successful!");
                    routeChange("home");                     
               }
               else{
                    alert("Error! Invalid username/password.");
                    console.log("sign-up was failed!");
                    routeChange("signin");
                    history.push("/signin");
               }         
          })
          .catch(err => console.log(err));       
     };

     return(
         
          <div className="form-signin-container center" id="Form">
             
               <Form>
                    <p className="title">Sign In</p>
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control
                    onChange={onEmailChange}
                    className="form-input" 
                    size="sm" type="email" 
                    placeholder="Enter 
                    email" 
                    width="10"/>
                    <Form.Text className="text-muted">
                         
                    </Form.Text>            
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    onChange={onPasswordChange}
                    className="form-input" 
                    size="sm" 
                    type="password" 
                    placeholder="Password" />             
                   
                    <Button 
                    variant="outline-secondary" size="sm" id="signin-btn"
                    
                    onClick={() => {   
                         routeChange("home");
                         onsubmitSigninHandler();
                         history.push("/");                            
                         }}>
                         Sign In
                    </Button>
                   
                    <span className="register-link"
                     onClick={() => { 
                    }}                  
                    >New user? Sign up 
                    <Link to="/signUp"
                    onClick={() => {
                         routeChange("signUp");
                         history.push("/signUp");
                         console.log("to Sign Up"); 
               }}
                    > now!</Link>     
                    </span>               
               </Form>         
          </div>
     )
}
export default withRouter(SignIn);

