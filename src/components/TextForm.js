import React, { useState } from 'react'


export default function TextForm(props) {
    const ipStyle = {
        width: "90px",
        display: "inline"
    }
    const [fword, setFword] = useState("");
    const [rword, setRword] = useState("");
    const handleFind = (event) => {

    }
    const handleReplace = (event) => {
        let newText = text.replaceAll(fword, rword);
        setText(newText);
    }

    const handleOnUClicked = () => {
        // console.log("clicked buttomn");
        const convertToUppercase = text.toUpperCase();
        setText(convertToUppercase);
    }
    const handleOnLcClicked = () => {
        const convertToUppercase = text.toLowerCase();
        setText(convertToUppercase);
    }
    const handleOnChange = (event) => {
        // console.log("change hua hai");
        setText(event.target.value);
    }
    const handleOnChangef = (event) => {
        // console.log("change hua hai");
        setFword(event.target.value);
    }
    const handleOnChanger = (event) => {
        // console.log("change hua hai");
        setRword(event.target.value);
    }

    const handleOnReslicked = (event) => {
        // console.log("change hua hai");
        setText("");
    }
    const handleOnCapClicked = () => {
        let newText = text.split(' ').map(txt => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()).join(" ");
        setText(newText);
    }

    const [text, setText] = useState('');
    // text = "hduawhdui";//wrng way to change the text variable
    // setText("Bhai text yaha daal");//correct way to change the text variable
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="3" onChange={handleOnChange} value={text}></textarea>
                </div>
                <div className="btn btn-primary mx-2" onClick={handleOnReslicked}>Reset</div>
                <div className="btn btn-primary mx-2" onClick={handleOnUClicked}>Convert to UpperCase</div>
                <div className="btn btn-primary mx-2" onClick={handleOnLcClicked}>Convert to LowerCase</div>
                <div className="btn btn-primary mx-2" onClick={handleOnCapClicked}>Capitalise each Word</div>
                <input className="form-control my-2 mx-2" style={ipStyle} type="find" onChange={handleOnChangef} value={fword} aria-label="find" />
                <div className="btn btn-primary my-2 mx-2" onClick={handleFind}>Find</div>
                <input className="form-control my-2 mx-2" style={ipStyle} type="replace" onChange={handleOnChanger} value={rword} aria-label="find" />
                <div className="btn btn-primary my-2 mx-2" onClick={handleReplace}>Replace</div>

            </div>
            <div className="container my-3">
                <h1> Your text summary  </h1>
                <p> Your text has<br />
                    <em>Words : {text.split(" ").length}</em><br />
                    <em>Characters : {text.length}</em><br />
                    <em>Estimated time to read the text : {text.split(" ").length / 2} Seconds</em>
                </p>
            </div>

        </>
    )
}
