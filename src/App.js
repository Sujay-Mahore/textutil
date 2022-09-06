//import logo from './logo.svg';
import React, { useState } from "react";

import "./App.css";
import Alert from "./components/Alert";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
//import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>
  {
    setAlert(
      {
        message: message,
        type :type
      }
    )
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#343a40'
      showAlert("Dark Mode Enabled","success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode Disabled","success")


    }
  };
  return (
     <>
     {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText=" About Our project"
        mode={mode}
        toggleMode={toggleMode}
        
      />
      <Alert alert ={alert} />
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about"  element  = {<About /> }/>
            
          
          <Route exact path="/" element = {<TextForm heading = "Enter Text Below To Analyze"  mode = {mode} showAlert = {showAlert} /> */}

{/* }/>


          
        </Routes> */}
        <TextForm heading = "Enter Text Below To Analyze"  mode = {mode} showAlert = {showAlert} />

        {/* <About /> */}
      </div>
       {/* </Router> */}
    </>
  );
}

export default App;
