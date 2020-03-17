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
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(true);
  // const [signInStatus] = useState(false);

  //signUp
  const [user, setUser] = useState({  
    id: "",
    name: "",
    email: "",
    password: "",
    entries: 0,
    joined: ""
  });
  
  const loadUser = (userData)  => {
    setUser({  
      id: userData.id,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      entries: userData.entries,
      joined: userData.joined
    })
    console.log(userData);
  };
  
  const routeChangeHandler = (currentRoute) => {
    if (currentRoute === "home" ) {
      setIsSignedIn(false);
    }
    else if (currentRoute ==="signin" || currentRoute === "signOut" 
    || currentRoute === "signUp"){
      setIsSignedIn(true);
    }
    if (currentRoute === "homepage" ) {
      setIsSignedIn(true);
    }

    setRoute(currentRoute);
    console.log("Current Route: " , currentRoute);
  }

  //clear image link input field:
  const clearUser = () => {
    setImageUrl("");
    setUser({
      name: "",
      email: "",
      password: ""
    })
    setRoute("home");
    setInput("");
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
    .then(response => {
      if(response){
        fetch("http://localhost:4000/image", {
          method: "put",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            id: user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          setUser({...user, entries: count}) 
        })
        .catch(err => console.log(err));
      }
      displayFaceBox(calculateFaceLocation(response))    
    })
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
      name={user.name}
      isSignedIn={isSignedIn}
      resetUserSession={clearUser}
      />
      { 
        route === "signin" 
              ?
              <SignIn
               routeChange={routeChangeHandler}
               signUpUser={loadUser}
               name={user.name} />
              :
        route === "signUp"
              ?
              <SignUp routeChange={routeChangeHandler}
                      signUpUser={loadUser}/>
        :
     
        route === "home" || route ==="signOut" || route === "homepage"
        ?  
        <div>      

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signin-signup" component={SignIn}/>
              <Route path="/signUp" component={SignUp}/>
            </Switch>
                
            <Rank 
              name={user.name}
              counter={user.entries}/>

            <ImageLinkForm 
              onInputChange={onInputChangeHandler} 
              onKey={onKeySubmitHandler}         
              onClick={onClickSubmitHandler}/>      
           
            <FaceRecognition faceDetect={box} imageUrlProps={imageUrl} />       
       
        </div>
        :
        <h2>error rendering webpage</h2>

          }
  </div>
  );
}
export default App;
