import React from "react";
import "./Rank.style.css";

const Rank = ({ name, counter }) => {
     return (
          <div>
               <div className="container">
                    {` ${name}, you have uploaded ${counter}`}
               </div>
          </div>
     )
}
export default Rank;