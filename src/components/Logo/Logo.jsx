import React from "react"
import "./Logo.style.css";
import Tilt from "react-tilt";
import Brain from "./brain.png";

const Logo = () => {

     return(
          <div className="logo">
               <Tilt className="Tilt" options={{ max : 35 }} style={{ height: 115, width: 100 }} >
                    <div className="Tilt-inner">
                    <img className="brain" src={Brain} alt="brain"/>
                    </div>
                    
               </Tilt>
              
          </div>
     )
};
export default Logo;