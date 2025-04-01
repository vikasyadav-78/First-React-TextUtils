// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import React , {useState} from 'react';

function App() {
  const [mode, setmode] = useState('light'); // weather is dark mode  
  return (
    <>
      <Navbar title="Navbar" about="About" mode={mode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
