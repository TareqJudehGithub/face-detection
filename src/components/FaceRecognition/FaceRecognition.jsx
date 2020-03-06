import React from 'react';
import  './FaceRecognition.style.css';

const FaceRecognition = ({ imageUrlProps, faceDetect }) => {
    
      return (
          <div className="center">
              <div className="image">
              <img id="inputImage" src={imageUrlProps} alt="" height="350px"/>
              <div className="bounding-box" style={{
                top: faceDetect.topRow,
                right: faceDetect.rightCol,
                bottom: faceDetect.bottomRow,
                left: faceDetect.leftCol
              }}>

              </div>
              </div>
            
          </div> 
      );
};

export default FaceRecognition;
