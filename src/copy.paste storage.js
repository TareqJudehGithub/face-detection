import React, {useState, useEffect} from 'react';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from "clarifai";

import './App.css';

//particles
const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 400
      }
      }
    }
  }

//Clarifai
const app = new Clarifai.App({
  apiKey: "7d585dcb38dd43c6bdc72efb2b8bc84d"
 });


function App() {

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("")

  const onInputChangeHandler = (event) => {
    setInput(event.target.value)
  };
useEffect(() => {

    const fetchImage = app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL , input)
    .then(
    function(response) {
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
      console.log(err)
    }
  );
  console.log(fetchImage);
  

},);
  

  return (
    <div className="App">
      <Particles
          className="particles" 
          params={particlesOptions} />
      <Navigation />
       <Logo />
      <ImageLinkForm 
      onInputChange={onInputChangeHandler}
      onBtnClick={() => setImageUrl(input)}
       />
      <Rank />
      <FaceRecognition imageUrlProps={imageUrl} /> 
    </div>
  );
}

export default App;

