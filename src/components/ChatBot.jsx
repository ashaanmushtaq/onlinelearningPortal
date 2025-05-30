import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabaseClient';

export default function Chatbot() {
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const onLoad = () => {
      if (!document.getElementById('BZuoJVSG2JjgxNou3e3YU')) {
        const script = document.createElement('script');
        script.src = 'https://www.chatbase.co/embed.min.js';
        script.id = 'BZuoJVSG2JjgxNou3e3YU';
        script.dataset.domain = 'www.chatbase.co';
        document.body.appendChild(script);
      }
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    if (!feedback.trim()) {
      setStatus('⚠️ Please write some feedback first!');
      return;
    }

    const { error } = await supabase
      .from('feedbacks')
      .insert([{ message: feedback }]);

    if (error) {
      console.error('Feedback error:', error.message);
      setStatus('❌ Submission failed. Please try again later.');
    } else {
      setStatus('✅ Thank you for your feedback!');
      setFeedback('');
    }
  };

  return (
    <>
      <div className="chatbot-wrapper">
        <motion.div
          className="chatbot-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="chatbot-heading">💬 Chat with Our AI Assistant</h2>
          <p className="chatbot-subtext">
            Ask anything about the <strong>Database Lab System</strong> or other topics — we're here to help! Tap on the right bottom icon to start conversation.
          </p>

          {/* Feedback form */}
          <form onSubmit={handleFeedbackSubmit} className="feedback-form">
            <textarea
              className="feedback-input"
              placeholder="Send us feedback about your experience..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={3}
            />
            <button type="submit" className="feedback-button">
              Submit Feedback
            </button>
            {status && <p className="feedback-status">{status}</p>}
          </form>

          <div id="chatbase-widget" className="chatbot-widget-area" />
        </motion.div>
      </div>

      <style>{`
        /* Reset */
        *, *::before, *::after {
          box-sizing: border-box;
        }
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(to right, #667eea, #764ba2);
        }

        .chatbot-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 40px 20px;
          background: linear-gradient(to right, #667eea, #764ba2);
        }

        .chatbot-card {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px 25px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  min-height: 500px; /* optional: feel free to adjust */
}




        .chatbot-heading {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 12px;
          color: #333;
        }

        .chatbot-subtext {
          font-size: clamp(1rem, 2.5vw, 1.1rem);
          color: #555;
          margin-bottom: 24px;
        }

        .chatbot-widget-area {
          min-height: 110px;
          margin-top: 20px;
        }

        .feedback-form {
          margin-top: 20px;
        }

        .feedback-input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #ccc;
          font-size: 1rem;
          resize: none;
          margin-bottom: 10px;
          transition: border 0.3s;
          margin-top: 50px;
        }

        .feedback-input:focus {
          outline: none;
          border-color: #667eea;
        }

        .feedback-button {
          background-color: #2f80ed;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }

        .feedback-button:hover {
          background-color: #1c64d1;
        }

        .feedback-status {
          margin-top: 10px;
          font-size: 0.95rem;
          color: #2f80ed;
        }

        /* Responsive */
        @media (max-width: 480px) {
          .chatbot-card {
            padding: 24px 18px;
            border-radius: 16px;
          }

          .chatbot-heading {
            font-size: 1.8rem;
          }

          .chatbot-subtext {
            font-size: 1rem;
            margin-bottom: 20px;
          }

          .feedback-button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
