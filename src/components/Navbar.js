import React, { useState } from 'react'
// import TextForm from './
import PropTypes from 'prop-types'
export default function Navbar(props) {
    const [buttonState, setButtonState] = useState("Dark");
    const handleTheme = () => {
        const body = document.querySelector('body');
        // body.style.background = "#808080";
        if (body.style.backgroundColor.toString() === "rgb(53, 53, 53)") {
            body.style.backgroundColor = "white";
            body.style.color = "black";
            setButtonState("Dark");
        }
        else {
            body.style.backgroundColor = "rgb(53,53,53)";
            body.style.color = "white";
            setButtonState("Light");
        }
        // console.log(body.style.background.toString()); // yhis i used to check what strig
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                        </ul>

                        <form className="d-flex">
                            <div className="btn btn-primary mx-2" onClick={handleTheme}>Theme to {buttonState}</div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


//galti ko avoid karne ka accha tareekaa
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

//default props agar pass nhi kiye too
Navbar.defaultProps = {
    title: "xnvxvjj"
}