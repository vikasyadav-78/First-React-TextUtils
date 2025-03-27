import React , {useState} from 'react'



export default function TextForm(props) {
        const [text, setText] = useState('Enter text here');

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">Example textarea/</label> */}
                <textarea className="form-control" value={text} id="myBox" rows="10"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handdleUpClick}>Convert To UpparCase</button>
        </div>

    )
}
