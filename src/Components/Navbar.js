import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand mx-auto" href="/" style={{ color: props.mode === 'dark' ? 'white' : 'black', textAlign: 'center', width: '100%' }}>
          <h1
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontSize: '3rem',  // Set the font size for Textify
              letterSpacing: '3px',
              position: 'relative', /* Keep position relative to container */
              display: 'inline-flex',
              alignItems: 'center', /* Vertically align the star and text */
            }}
          >
            {/* Left star before Textify */}
            <span
              style={{
                fontSize: '3rem', // Match the star size with the text size
                color: '#f8d347',  // Gold color for the star
                marginRight: '10px', // Space between the star and text
              }}
            >
              &#9733; {/* Star character */}
            </span>
            {props.title}
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                {props.Home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                {props.AboutText}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            {props.mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Home: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
