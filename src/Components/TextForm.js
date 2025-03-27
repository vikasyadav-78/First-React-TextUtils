import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');
    const handdleOnClick = () => {
        console.log("Function is clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handdleLoClick = () => {
        console.log("Function is clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }


    const handdleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
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
            </div>

            <div className='container my-4'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(' ').length} Mintus read </p>
            </div>

        </>

    )
}
