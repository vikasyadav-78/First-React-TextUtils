// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import React, { useState } from 'react';

import { Routes, Route, Router } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";





function App() {

  const [mode, setMode] = useState('light'); // weather is dark mode 
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode is enableed", "Success");

    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("White mode is enableed", "Success");
    }
  }
  return (

      <Router>
        <Navbar title="Navbar" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
            <Routes>
              <About />
              {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> */}
              {/* <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} /> */}
              <Route path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </div>
      </Router>
      
  );
}

export default App;
