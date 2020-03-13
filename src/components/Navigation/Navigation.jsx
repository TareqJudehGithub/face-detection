import React from "react";
import "./Navigation.style.css"
import { Link, withRouter } from "react-router-dom";


const Navigation = ({history, routeChange, isSignedIn}) => {
   
     return (
          <div>
               {
               isSignedIn !== true
               ?
               <nav>
                    <ul className="nav" >      
                         <Link to="/"
                              className="link" 
                              onClick={() => {
                                   routeChange("signOut");
                                   console.log("Sign out")}}>
                              Sign Out
                         </Link>

                         <Link to="/"
                              className="link"
                              onClick={() => {
                              routeChange("home");
                              console.log("home");
                              }}>
                              Home
                         </Link>
                         
                    </ul>
               </nav>
               :
               <nav>
               <ul className="nav" >

               <li
                    className="link" 
                         // to="/signin"
                    onClick={() => {
                         history.push("/signin");
                         // dispatch(toggleHidden());
                                   
                         routeChange("signin");
                         console.log("to Sign in");}}
                    >                  
                    Sign In               
               </li>
               <Link to="/"
                    onClick={() => {
                         routeChange("home");
                         console.log("home");
                         }}>
                    Home
                    </Link>
               
               </ul>

               </nav>
               }
          </div>
          )
}
export default withRouter(Navigation);
