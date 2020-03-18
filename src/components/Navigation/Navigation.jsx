import React from "react";
import "./Navigation.style.css"
import { Link, withRouter } from "react-router-dom";


const Navigation = ({ history, routeChange, isSignedIn,
                    name, resetUserSession }) => {
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
                                   history.push("/")
                                   resetUserSession()
                                   console.log("Signed out successfully!");
                                  
                              }}>
                              Sign Out
                         </Link>

                         <Link to="/"
                              className="link"
                              onClick={() => {
                              routeChange("homepage");
                              console.log("home");
                              }}>
                              Home
                         </Link>
                         <li><span>welcome {name}</span>
                              {/* <select className="welcome">
                              
                              <option>{name}</option>
                              <option>Log out</option>
                              <option>Manage Account</option>
                              </select> */}
                         </li>
                         
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
                         routeChange("homepage");
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
