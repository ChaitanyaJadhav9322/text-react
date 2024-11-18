import React, { useState } from "react";
import PropTypes from "prop-types";
import "./textForm.css";
import avtarImage from "./avtar.png"; // Ensure the path is correct

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [htmlOutput, setHtmlOutput] = useState("");
  const [fontStyle, setFontStyle] = useState("Arial");

  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase","Success");
  };

  const handleLo = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase","Success");
  };

  const handleCL = () => {
    setText("");
    setHtmlOutput(""); // Clear the HTML output as well
     
  };

  const onchange = (event) => {
    setText(event.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
      props.showAlert("Text copied ","Success");
    });
  };

  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "textfile.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    props.showAlert("Text Downloaded successfully!!","Success");
  };

  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setText(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const speakText = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  const applyBold = () => {
    setHtmlOutput(`<b>${text}</b>`);
  };

  const applyItalic = () => {
    setHtmlOutput(`<i>${text}</i>`);
  };

  const applyStyle = (style) => {
    let newText;
    switch (style) {
      case "bold":
        newText = `<b>${text}</b>`;
        break;
      case "italic":
        newText = `<i>${text}</i>`;
        break;
      case "underline":
        newText = `<u>${text}</u>`;
        break;
      default:
        newText = text;
    }
    setHtmlOutput(newText);
  };

  const handleFontChange = (event) => {
    setFontStyle(event.target.value);
  };

  return (
    <div className={`container ${props.mode === 'dark' ? 'dark-bg' : 'light-bg'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
      <div className="row">
        <div className="col-md-4 avatar-container">
          <img src={avtarImage} alt="Avatar" className="avatar-img" />
        </div>

        <div className="col-md-8">
          <div className="form-floating">
            <textarea
              className="form-control"
              value={text}
              id="mybox"
              onChange={onchange}
              rows="6"
            ></textarea>
          </div>

          <div className="button-container">
            <button className="btn btn-primary" onClick={handleUp}>UpperCase</button>
            <button className="btn btn-primary" onClick={handleLo}>LowerCase</button>
            <button className="btn btn-primary" onClick={handleCL}>Clear</button>
            <button className="btn btn-primary" onClick={copyToClipboard}>Copy</button>
            <button className="btn btn-primary" onClick={downloadText}>Download</button>
            <button className="btn btn-primary" onClick={speakText}>Speak</button>
            <button className="btn btn-primary" onClick={applyBold}>Bold</button>
            <button className="btn btn-primary" onClick={applyItalic}>Italic</button>
            <select
              className="btn btn-secondary"
              onChange={(e) => applyStyle(e.target.value)}
            >
              <option value="">Select Style</option>
              <option value="bold">Bold</option>
              <option value="italic">Italic</option>
              <option value="underline">Underline</option>
            </select>
            <input
              type="file"
              accept=".txt"
              onChange={uploadFile}
              className="btn btn-primary"
            />
          </div>

          {/* Font Style Dropdown */}
          <div className="mt-2">
            <label htmlFor="fontStyleSelect">Choose Font Style: </label>
            <select
              id="fontStyleSelect"
              onChange={handleFontChange}
              className="btn btn-secondary"
            >
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
              <option value="Georgia">Georgia</option>
            </select>
          </div>

          <div className="my-3">
            <h4>Your Text Summary</h4>
            <p>Words: {text.split(" ").filter(word => word.length > 0).length} | Characters: {text.length}</p>
            <p>{(0.008 * text.split(" ").filter(word => word.length > 0).length).toFixed(2)} Minutes to read</p>
          </div>

          <div className="my-3">
            <h4>Preview</h4>
            <p
              style={{ fontFamily: fontStyle }}
              dangerouslySetInnerHTML={{ __html: htmlOutput }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};
