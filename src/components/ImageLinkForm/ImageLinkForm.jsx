import React from 'react';
import "./ImageLinkForm.style.css";



const ImageLinkForm = ({ onInputChange, onKey, onClick }) => {
     
     return (
          <div className="image-link-container">
              
               <div className="image-link">
                    <p className="text">
                         {"This smart brain will detect faces in your images!"}
                    </p>
                    <input 
                    id="image-input"
                    className="image-input"
                    onChange={onInputChange}
                    onKeyPress={onKey}
                    type="text"
                    placeholder="insert image link here.."
                    />
                    
                    <button
                    id="detect-btn"
                    onClick={onClick}
                    >Detect</button>
                                  
               </div>
          </div>
     )
}
export default ImageLinkForm;