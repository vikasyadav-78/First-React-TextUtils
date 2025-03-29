import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');
    const handdleOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handdleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }


    const handdleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }


    const clearTextBtn = (event) => {
        let clean = "";
        setText(clean)
    }


    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" class="form-label">Example textarea/</label> */}
                    <textarea className="form-control" value={text} onChange={handdleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className='btn btn-primary my-2' onClick={handdleOnClick}>Convert To UpparCase</button>
                <button className='btn btn-primary ms-4' onClick={handdleLoClick}>Convert To Lowercase</button>
                <button className='btn btn-primary ms-4' onClick={clearTextBtn}>Clear Form</button>
            </div>

            <div className='container my-4'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(' ').length} Mintus read </p>
            </div>

        </>

    )
}
