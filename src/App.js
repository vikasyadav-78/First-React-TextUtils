// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

function App() {
  return (
    <>
      <Navbar title="Navbar"  about="About"/>
      <div className="container my-3">
      <TextForm  heading="Enter the text to analyze" />
      {/* <About /> */}
      </div>
    </>
  );
}

export default App;
 