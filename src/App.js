import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Login from './Components/Login';   
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alert, setAlert] = useState(null);
  const [themeColor, setThemeColor] = useState('default');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode is on", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is on", "success");
    }
  };

  const changeThemeColor = (color) => {
    setThemeColor(color);
    document.body.style.backgroundColor = color;
    showAlert(`Theme color changed to ${color}`, "success");
  };

  return (
    <>
      <Router> 
        {!isLoggedIn ? (
          <Login setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <>
            <Navbar 
              title="Textify" 
              AboutText="About Us" 
              Home="Home" 
              toggleMode={toggleMode} 
              mode={mode} 
            />
            
            <Alert alert={alert} />

            <Routes>
              <Route exact  path="/about" element={<About mode={mode} themeColor={themeColor} />} />
              <Route exact path="/" element={
                <>
                  <div className="container">
                    <div>
                      <label htmlFor="colorSelector">Choose a theme color: </label>
                      <select id="colorSelector" onChange={(e) => changeThemeColor(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                      </select>
                    </div>
                    <TextForm showAlert={showAlert} heading="Enter any text to analyze" mode={mode} themeColor={themeColor} />
                  </div>
                  <div className="container">
                    <Footer mode={mode} />
                  </div>
                </>
              } />
            </Routes>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
