
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate(); 

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!termsAgreed) {
      alert('Please agree to the terms and conditions to proceed.');
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);

  
    navigate('/home'); 
  };

  return (
    <div className="login-container">
      <div className="welcome-message">
        <h2>Welcome to Our Website!</h2>
        <p>Please login to access your account.</p>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="terms-checkbox">
          <input
            type="checkbox"
            id="termsAgreement"
            checked={termsAgreed}
            onChange={(e) => setTermsAgreed(e.target.checked)}
            required
          />
          <label htmlFor="termsAgreement">I agree to the terms and conditions</label>
        </div>
        <button type="submit">Login</button>
        <div className="forgot-password">
          <a href="#" onClick={() => navigate('/forgot-password')}>Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
