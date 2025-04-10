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
    const handleExtraSpaces = () => {
        let clearSpaces = text.split(/[ ] +/);
        setText(clearSpaces.join(" "));
        props.showAlert("Clear extra spaces !", "Success");
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2 className='mb-3'>{props.heading}</h2>
                <div className="mb-3">
                    {/* <label for="myBox" class="form-label">Example textarea/</label> */}
                    <textarea className="form-control" value={text} onChange={handdleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handdleOnClick}>Convert To UpparCase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handdleLoClick}>Convert To Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={clearTextBtn}>Clear Form</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Formet Text</button>
            </div>
            <div className='container my-4' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Mintus read </p>
            </div>
        </>
    )
}
