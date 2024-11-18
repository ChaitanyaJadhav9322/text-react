import React from 'react';
import './about.css';

export default function About(props) {
  return (
    <div className= {`about-section ${props.mode === 'dark' ? 'dark-bg' : 'light-bg'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
      <h2>About Us</h2>
      <p>Welcome to our Text Processing App!  </p>

      <div className="feature">
        <h3>Download Text</h3>
        <p>Easily download your modified text as a file with just a click. Whether it's plain text or formatted, you can store it locally for future use.</p>
      </div>

      <div className="feature">
        <h3>Speak Text</h3>
        <p>Our app allows you to convert text into speech. Simply type or paste your text, and the app will read it out loud using a built-in voice feature.</p>
      </div>

      <div className="feature">
        <h3>Upload Files</h3>
        <p>Upload text files and edit them directly within the app. Modify, analyze, or process the text as per your needs, and download the edited version.</p>
      </div>

      <div className="feature">
        <h3>Text Transformations</h3>
         
        <ul>
          <li>Uppercase Text: Convert all text to uppercase.</li>
          <li>Lowercase Text: Convert all text to lowercase.</li>
          <li>Clear Text: Easily erase all text with a single click.</li>
        </ul>
      </div>

       
    </div>
  );
}
