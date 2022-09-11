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
        props.showAlert('The selected text is replaced', 'success');
    }

    const handleOnUClicked = () => {
        // console.log("clicked buttomn");
        const convertToUppercase = text.toUpperCase();
        setText(convertToUppercase);
        props.showAlert('The text is in UPPERCASE now ', 'success');
    }
    const handleOnLcClicked = () => {
        const convertToUppercase = text.toLowerCase();
        setText(convertToUppercase);
        props.showAlert('The text is in lowercase now', 'success');
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
        props.showAlert('The text is reset', 'success');
    }
    const handleOnCapClicked = () => {
        let newText = text.split(' ').map(txt => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()).join(" ");
        setText(newText);
        props.showAlert('The text is n Capatalised Mode', 'success');
    }

    const [text, setText] = useState('');
    function countWords(s) {
        s = s.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
        s = s.replace(/[ ]{2,}/gi, " ");//2 or more space to 1
        s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
        return s.split(' ').filter(function (str) { return str !== ""; }).length;
        //return s.split(' ').filter(String).length; - this can also be used
    }

    // text = "hduawhdui";//wrng way to change the text variable
    // setText("Bhai text yaha daal");//correct way to change the text variable
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="3" onChange={handleOnChange} value={text}></textarea>
                </div>
                <div className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleOnReslicked}>Reset</div>
                <div className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleOnUClicked}>Convert to UpperCase</div>
                <div className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleOnLcClicked}>Convert to LowerCase</div>
                <div className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleOnCapClicked}>Capitalise each Word</div>
                <input className="form-control my-2 mx-2" style={ipStyle} type="find" onChange={handleOnChangef} value={fword} aria-label="find" />
                <div className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleFind}>Find</div>
                <input className="form-control my-2 mx-2" style={ipStyle} type="replace" onChange={handleOnChanger} value={rword} aria-label="find" />
                <div className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleReplace}>Replace</div>

            </div>
            <div className="container my-3">
                <h1> Your text summary  </h1>
                <p> Your text has<br />
                    <em>Words :
                        {countWords(text)}
                    </em><br />
                    <em>Characters : {text.length}</em><br />
                    <em>Estimated time to read the text : {text.split(" ").length / 2} Seconds</em>
                </p>
            </div>

        </>
    )
}
