import React from 'react';

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color:"black",
  //   backgroundColor:"white"
  // })

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'black' : 'white'
  }

  return (
    <div className="container p-4" style={myStyle}>
      <h2>About Us</h2>
      <p>This is the About page of our React app.</p>
    </div>
  );
}

