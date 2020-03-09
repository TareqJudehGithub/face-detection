import React, {useState} from "react";
import "./Navigation.style.css"
import { Link } from "react-router-dom";

const Navigation = () => {
     const [signInStatus, setSignInStatus] = useState(true);
     return (
<div>
     
{
          signInStatus
          ?
          <nav>
                <ul className="nav" >

                    <Link
                         className="link" 
                         to="/SignIn"
                         onClick={() => {setSignInStatus(false)
                              console.log("to Sign in")}}
                        >                  
                         Sign In               
                    </Link>
                    <Link to="/"
                     className="link" >Home</Link>
                  

               </ul>

          </nav>
          :
          <nav>
               <ul className="nav" >      
                    <Link to="/"
                           className="link" 
                         onClick={() => {setSignInStatus(true);
                              console.log("Sign out")}}>
                         Sign Out
                    </Link>
                    <Link to="/"
                     className="link" >Home</Link>
                    
               </ul>

          </nav>}

     </div>
     )
}
export default Navigation;



     // const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
     // let {hidden, SignMeUp}= state;
     // const [route] = useState("signIn");
     
//  const signInOff = () => {
    
//  }
// const INITIAL_STATE = {
//      hidden: true,
//      SignMeUp: true
// };
// const toggleHidden = hidden => ({
//      type: "TOGGLE_HIDDEN",
//      payload: hidden
// });
// const toggleSignUp = on => ({
//      type: "TOGGLE_SignUp",
//      payload: on
// });

// const reducer = (state, action) => {
//      switch(action.type){
//           case "TOGGLE_HIDDEN":
//           return {
//                ...state,
//                hidden: !state.hidden
//           };
//           case "TOGGLE_SignUp":
//                return{
//                     ...state,
//                     SignMeUp: !state.SignMeUp
//                }
//           default:
//                return state;
//      };
// };



          //       {
          //           hidden 
          //           ?
          //           null
          //           :
          // //     console.log("hello")
          //                (route === "signIn"
          //                ?
          //                <Link to="/SignIn"/>
          //                :
          //                <SignUp />)
               
          //      } 
          //      {/* {
          //           SignMeUp
          //           ?
          //           null
          //           :
          //           <SignUp />
          //      } 

          
                         //  <li className="link"
                         // onClick={() => dispatch(toggleSignUp(),
                         //      console.log("sign up dispatch"))}>
                         //      New user?
                         // </li> 