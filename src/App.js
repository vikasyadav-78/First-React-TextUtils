// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('dark'); // weather is dark mode 

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }
  const toggleBtnText = () =>{
    if (mode) {
      
    }
  }
  return (
    <>
      <Navbar title="Navbar" about="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
