import React from 'react';
import "./ImageLinkForm.style.css";

const ImageLinkForm = () => {
     return (
          <div className="container">
              
               <div className="image-link">
                    <p className="text">
                         {"This smart brain will detect faces in your images!"}
                    </p>
                    <input 
                    className="image-input"
                    type="text"
                    placeholder="insert image link here.."/>
                    <button className="btn">Detect</button>
               </div>
          </div>
     )
}
export default ImageLinkForm;