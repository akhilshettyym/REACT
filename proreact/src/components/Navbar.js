import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Home</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.aboutText}</Link>
                        </li> */}
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}> 
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};