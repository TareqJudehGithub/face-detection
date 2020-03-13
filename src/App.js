import React, {useState} from 'react';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import {Route, Switch} from "react-router-dom";
import Particles from 'react-particles-js';
import Clarifai from "clarifai";
import './App.css';

import SignIn from './components/SignIn/SignIn-dropdown';
import SignUp from './components/SignUp/SignUp';

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
const Home = () => {
  return (
    <div>
   
  </div>
  )
  
}
function App() {

  //states
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("")
  const [box, setBox] = useState({});
  const [user, setUser] = useState(
     {  
    id: "",
    name: "",
    email: "",
   
    entries: 0,
    joined: ""
  })
  
  // const [signInStatus] = useState(false);

  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(true);

  const routeChangeHandler = (currentRoute) => {
    if (currentRoute === "home" ) {
      setIsSignedIn(false);
    }
    else if (currentRoute ==="signin" || currentRoute === "signOut" 
    || currentRoute === "signUp"){
      setIsSignedIn(true);
    } 

    setRoute(currentRoute);
    console.log("Current Route: " , currentRoute);
  }
  //clear image link input field:


  const loadUser = (userData)  => {
    setUser({  
      id: userData.id,
      name: userData.name,
      email: userData.email,
     
      entries: userData.entries,
      joined: userData.joined
    })
  };

  const calculateFaceLocation = (data) => {
    const ClarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
  
    return (
      { 
      topRow: ClarifaiFace.top_row * height,
      rightCol: width - (ClarifaiFace.right_col * width),
      bottomRow: height - (ClarifaiFace.bottom_row * height),
      leftCol: ClarifaiFace.left_col * width
    },
    {   
        topRow: ClarifaiFace.top_row * height,
        rightCol: width - (ClarifaiFace.right_col * width),
        bottomRow: height - (ClarifaiFace.bottom_row * height),
        leftCol: ClarifaiFace.left_col * width
    }
    )
  }
  //face_detect
  const displayFaceBox = (box) => {
    setBox(box);
    console.log(box);
  };

  // url image input 
  const onInputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  //submit image by pressing Enter key
  const onKeySubmitHandler = (event) => {
    if(event.key === "Enter"){
      onClickSubmitHandler();
      console.log("key event fired!");
    }
  }

  //submit image by clicking mouse button
  const onClickSubmitHandler = () => {
    setImageUrl(input)

    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, input)
    .then(response => displayFaceBox(calculateFaceLocation(response))) 
    .catch(err => console.log(err));
  };

  return (
   
    <div className="App">
      
      <Particles
          className="particles" 
          params={particlesOptions} />
      <Logo />
      <Navigation 
      routeChange={routeChangeHandler}

      isSignedIn={isSignedIn}
      />
      { 
        route === "signin" 
              ?
              <SignIn routeChange={routeChangeHandler} />
              :
        route === "signUp"
              ?
              <SignUp routeChange={routeChangeHandler}/>
        :
     
        route === "home" || route ==="signOut"
        ?  
        <div>      

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signin-signup" component={SignIn}/>
              <Route path="/signUp" component={SignUp}/>
            </Switch>
          
            <ImageLinkForm 
              onInputChange={onInputChangeHandler} 
              onKey={onKeySubmitHandler}         
              onClick={onClickSubmitHandler}/>      
            {/* {
              signInStatus
              ?
              <Rank />
              : null
            } */}
               <Rank />
          
            <FaceRecognition faceDetect={box} imageUrlProps={imageUrl} />       
       
        </div>
        :
        <h2>error rendering webpage</h2>

          }
  </div>
  );
}
export default App;
