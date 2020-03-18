import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignIn-dropdown.style.css"
import {withRouter, Link} from "react-router-dom";

const SignIn = ({ history, routeChange, signUpUser }) => {
    const [signInEmail, setsignInEmail] = useState("");
    const [signInPassword, setsignInPassword] = useState("");

     
     const onEmailChange = (event) => {
          setsignInEmail(event.target.value);
     };
     const onPasswordChange = (event) => {
          setsignInPassword(event.target.value);
     };
     const onsubmitSigninHandler = (event) => {
         
          fetch("http://localhost:4000/profile/signin", {
          //posting email and password to the DB:
               method: "post",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify({
                    email: signInEmail,
                    password: signInPassword
               })
          })
          .then(Respone => Respone.json())
          .then(user => {
               if(user.id) {   

                    history.push("/");
                    signUpUser(user);
                    routeChange("home");                     
                    console.log(`sign-up was successful!`);
                    console.log("user info: " + signInEmail, signInPassword);
                              
               }
               else{
                    alert("Error! Invalid username/password.");
                    console.log("sign-up failed!");
                    // routeChange("signin");
                    // history.push("/signin");
               }         
          })
          .catch(err => console.log(err));  
          event.preventDefault();    
     };

     return(
         
          <div className="form-signin-container center" id="Form">
             
               <Form onSubmit={onsubmitSigninHandler}>
                    
                    <p className="title">Sign In</p>
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control
                    onChange={onEmailChange}
                    className="form-input" 
                    size="sm" type="email" 
                    placeholder="Enter 
                    email" 
                    width="10"
                    required/>
                    <Form.Text className="text-muted">
                         
                    </Form.Text>            
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    onChange={onPasswordChange}
                    className="form-input" 
                    size="sm" 
                    type="password" 
                    placeholder="Password"
                    required />             
                   
                    <Button 
                    variant="outline-secondary" size="sm" id="signin-btn"
                    type="submit"
                    onSubmit={() => history.push("/")}>
                         Sign In
                    </Button>
                   
                    <span className="register-link"                 
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

