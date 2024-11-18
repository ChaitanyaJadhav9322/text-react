import React, { useState } from 'react';
import './Login.css';
export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login check: check if email and password are 'user' and 'password'
    if (email === 'cj551634@gmail.com' && password === 'Chaitu@9322') {
      setIsLoggedIn(true); // Simulate successful login
      setErrorMessage(''); // Clear any error messages
    } else {
      setErrorMessage('Invalid username or password'); // Show error message for invalid credentials
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
              <label htmlFor="password">Password</label>
            </div>

            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <button type="submit" className="btn btn-primary w-100 py-2">
              Login
            </button>
          </form>
          <div className="text-center mt-3">
            <small>Don't have an account? <a href="signup.js">Sign Up</a></small>
          </div>
        </div>
      </div>
    </div>
  );
}
