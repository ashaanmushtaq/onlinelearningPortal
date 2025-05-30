import React from 'react';
import './InstructionModal.css';

export default function InstructionModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Welcome to the App!</h3>
        <p>
          Please follow these steps to get started:
        </p>
        <ol>
          <li>Click on <strong>Sign Up</strong> and register using your <strong>Gmail account</strong>.</li>
          <li>You will receive a <strong>verification email</strong> with a confirmation link.</li>
          <li><strong>Click the link</strong> in the email to verify your account.</li>
          <li>Return to this page and <strong>Login</strong> with your email and password.</li>
        </ol>
        <button className="close-button" onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
}
