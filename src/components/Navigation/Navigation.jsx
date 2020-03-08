import React, {useReducer} from "react";
import SignIn from "../SignIn/SignIn-dropdown";
import "./Navigation.style.css"

const INITIAL_STATE = {
     hidden: true
};
const toggleHidden = hidden => ({
     type: "TOGGLE_HIDDEN",
     payload: hidden
});

const reducer = (state, action) => {
     switch(action.type){
          case "TOGGLE_HIDDEN":
          return {
               ...state,
               hidden: !state.hidden
          };
          default:
               return state;
     };
};

const Navigation = () => {

     const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
     const {hidden}= state;
     return (
          <nav>
               <ul>
                    <li className="sign-in" 
                    onClick={() => dispatch(toggleHidden(), console.log("dispatch"))}
                    >                  
                         Sign In               
                    
                         </li>             
               </ul>
               {
                    hidden
                    ?
                    null
                    :
          //     console.log("hello")
                    <SignIn />
               
               }
          </nav>

     )
}
export default Navigation;