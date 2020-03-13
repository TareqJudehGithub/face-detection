import React, {useState}from "react";
import {withRouter} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.style.css";

const SignUp = ({routeChange, history}) => {

     const [userName, setuserName] = useState("");
     const [userEmail, setUserEmail] = useState("");
     const [userPassword, setUserPassword] = useState("");

     const [user, setUser] = useState({
          id: "",
          name: "",
          email: "",
          entries: 0,
          joined: ""
        });

        const loadUser = (userData)  => {

          setUser({  
            id: userData.id,
            name: userData.userName,
            email: userData.email,
           
            entries: userData.entries,
            joined: userData.joined
          })
        };

     const signUpNameChange = (event) => {
          setuserName(event.target.value)
     };
     const signUpEmailChange = (event) => {
          setUserEmail(event.target.value)
     };
     const signUpPasswordChange = (event) => {
          setUserPassword(event.target.value)
     };

     const onSubmitSignUp = () => {

          console.log(userName, userEmail, userPassword);
          fetch("http://localhost:4000/profile/signup", {
               method: "post",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify({
                    name: userName,
                    email: userEmail,
                    password: userPassword
               })        
          })
          .then(response => response.json())
          .then(userData => {
               if(userData){
                    loadUser(user)
                    history.push("/");
                    console.log(user, userData);
                    routeChange("home");
               }
               else{
                    alert("Error creating new user!")
                    routeChange("signUp");
                    history.push("/signUp");
               }
             
          })
          .catch(err => console.log(err));

     }

     return(
          <div className="form-signup-container" id="sign-up-form">
               <nav></nav>
               <Form className="sign-up-form">

                    <p className="title">Sign Up</p>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    className="form-input"
                    size="sm"type="text" 
                    placeholder="Enter your name"
                    required
                    onChange={signUpNameChange} 
                    />
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control 
                    className="form-input"
                     size="sm" 
                     type="email" 
                     placeholder="Enter email" 
                     width="10"
                     required
                     onChange={signUpEmailChange}/>
   
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    className="form-input" 
                    size="sm"
                    type="password" 
                    placeholder="Password"
                    required
                    onChange={signUpPasswordChange}/>

                    <Button 
                    variant="outline-secondary" size="sm" id="signmeup-btn"
                    onClick={() => {
                         onSubmitSignUp();
                         console.log("=> homepage");
                         history.push("/");
                         routeChange("home");
                         }}
                    >Sign Up</Button>              
               </Form>
          </div>
     )
}

export default withRouter(SignUp);
