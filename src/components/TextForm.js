import React, { useState } from 'react'


export default function TextForm(props) {
    const handleOnClicked = () => {
        // console.log("clicked buttomn");
        const convertToUppercase = text.toUpperCase();
        setText(convertToUppercase);
    }
    const handleOnChange = (event) => {
        // console.log("change hua hai");
        setText(event.target.value);
    }
    const [text, setText] = useState('text ki value');
    // text = "hduawhdui";//wrng way to change the text variable
    // setText("Bhai text yaha daal");//correct way to change the text variable
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="3" onChange={handleOnChange} value={text}></textarea>
            </div>
            <div className="btn btn-primary" onClick={handleOnClicked}>Conver to UpperCase</div>
        </div>
    )
}
