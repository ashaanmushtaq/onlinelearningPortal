import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import './Login.css';
import './InstructionModal.css'; // modal CSS file

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (isSignUp) {
      if (!name.trim()) {
        setError('Name is required for sign up');
        return;
      }

      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        setError(error.message);
        return;
      }

      const { error: insertError } = await supabase.from('users').insert([
        { name, email, password }
      ]);

      if (insertError) {
        console.error('Insert error:', insertError.message);
        setError('Account created! Please check your email to verify.');
      } else {
        setSuccessMessage('✅ Account created! Please check your email to verify.');
        setName('');
        setEmail('');
        setPassword('');
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
      } else {
        navigate('/dashboard');
      }
    }
  };

  return (
    <div className="login-container">
      {showInstructions && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Welcome to the App!</h3>
            <p>Please follow these steps:</p>
            <ol>
              <li>Click on <strong>Sign Up</strong> and register using your <strong>Gmail account</strong>.</li>
              <li>You will receive a <strong>verification email</strong> with a confirmation link.</li>
              <li><strong>Click the link</strong> in the email to verify your account.</li>
              <li>Return to this page and <strong>Login</strong> with your email and password.</li>
            </ol>
            <button className="close-button" onClick={() => setShowInstructions(false)}>
              Got it!
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleAuth} className="login-form">
        <h2 className="login-title animate__animated animate__fadeInDown">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>

        {successMessage && (
          <div className="success-message animate__animated animate__fadeInDown">
            {successMessage}
          </div>
        )}

        {isSignUp && (
          <input
            type="text"
            placeholder="Name"
            className="login-input animate__animated animate__fadeIn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="login-input animate__animated animate__fadeIn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="login-input animate__animated animate__fadeIn"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label className="show-password-label animate__animated animate__fadeIn">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />{' '}
          Show Password
        </label>

        {error && <p className="login-error animate__animated animate__shakeX">{error}</p>}

        <button type="submit" className="login-button animate__animated animate__pulse">
          {isSignUp ? 'Create Account' : 'Login'}
        </button>

        <p className="login-toggle-text animate__animated animate__fadeIn">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="login-toggle-button"
          >
            {isSignUp ? 'Login here' : 'Sign up here'}
          </button>
        </p>
      </form>
    </div>
  );
}
