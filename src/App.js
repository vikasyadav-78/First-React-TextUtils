// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // weather is dark mode 

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      
    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="Navbar" about="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"  mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
