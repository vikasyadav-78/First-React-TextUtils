import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="Navbar" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
          <Route exactpath="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}


export default App;
