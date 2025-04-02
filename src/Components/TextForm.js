import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');
    const handdleOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase !", "Success");
    }
    const handdleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase !", "Success");
    }


    const handdleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }


    const clearTextBtn = (event) => {
        let clean = "";
        setText(clean)
        props.showAlert("Clear text box !", "Success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy all text !", "Success");
    }

    const handleExtraSpaces = () =>{
        let clearSpaces = text.split(/[ ] +/);
        setText(clearSpaces.join(" "));
        props.showAlert("Clear extra spaces !", "Success");
    }

    return (
        <>
            <div className='container' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" class="form-label">Example textarea/</label> */}
                    <textarea className="form-control" value={text} onChange={handdleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'gray' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="10"></textarea>
                </div>
                <button className='btn btn-primary my-2' onClick={handdleOnClick}>Convert To UpparCase</button>
                <button className='btn btn-primary ms-4' onClick={handdleLoClick}>Convert To Lowercase</button>
                <button className='btn btn-primary ms-4' onClick={clearTextBtn}>Clear Form</button>
                <button className='btn btn-primary ms-4' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary ms-4' onClick={handleExtraSpaces}>Formet Text</button>
            </div>

            <div className='container my-4' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(' ').length} Mintus read </p>
            </div>

        </>

    )
}
