import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>

                        <form className="d-flex">
                            <div className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={props.modeChange}>{props.btnState} Mode</div>
                        </form>
                    </div>
                </div>
            </nav >
        </div >
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