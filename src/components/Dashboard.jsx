import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const navigate = useNavigate();

  const sections = [
    { label: '📘 Lab Content', color: 'green', path: '/assignments' },
    { label: '📚 Practical Course Material', color: 'blue', path: '/course-material' },
    { label: '🧪 Quizzes, Mids, Finals', color: 'yellow', path: '/exams' },
    { label: '💬 Ask Any Question', color: 'purple', path: '/chatbot' },
  ];

  const handleLogout = () => {
    // Clear user session or token here
    // Example: localStorage.removeItem('auth_token');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      <motion.h1
        className="dashboard-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 Welcome to Your Learning Portal
      </motion.h1>

      <motion.div
        className="dashboard-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {sections.map((section, index) => (
          <motion.button
            key={index}
            className={`dashboard-button ${section.color}`}
            onClick={() => navigate(section.path)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {section.label}
          </motion.button>
        ))}

        {/* Logout Button */}
        <motion.button
          className="logout-button"
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          🚪 Logout
        </motion.button>
      </motion.div>

      <style>
        {`
          .dashboard-container {
            min-height: 100vh;
            width: 100vw;
            padding: 5vw 3vw;
            box-sizing: border-box;
            background: linear-gradient(135deg, #fdfbfb, #ebedee);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .dashboard-title {
            font-size: clamp(1.5rem, 2.5vw + 1rem, 2.5rem);
            font-weight: 700;
            color: #0f172a;
            text-align: center;
            margin-bottom: 1.5rem;
          }

          .dashboard-grid {
            width: 100%;
            max-width: 1200px;
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.2rem;
            box-sizing: border-box;
          }

          .dashboard-button {
            padding: 0.9rem 1rem;
            font-size: clamp(0.95rem, 1vw + 0.5rem, 1.2rem);
            font-weight: 600;
            border: none;
            border-radius: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            width: 100%;
            min-height: 70px;
            text-align: center;
            word-break: break-word;
            color: white;
          }

          .dashboard-button:hover {
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
          }

          .dashboard-button.blue { background-color: #3b82f6; }
          .dashboard-button.green { background-color: #10b981; }
          .dashboard-button.yellow { background-color: #facc15; color: #1f2937; }
          .dashboard-button.purple { background-color: #8b5cf6; }

          /* Logout Button Styling */
          .logout-button {
            padding: 0.9rem 1rem;
            font-size: clamp(0.95rem, 1vw + 0.5rem, 1.2rem);
            font-weight: 600;
            border: none;
            border-radius: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            background-color: #f43f5e; /* Red color */
            color: white;
            width: 100%;
            min-height: 70px;
            text-align: center;
            word-break: break-word;
            margin-top: 1.5rem;
          }

          .logout-button:hover {
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
          }

          /* Responsive grid breakpoints */
          @media (max-width: 1024px) {
            .dashboard-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .dashboard-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }

            .dashboard-button {
              font-size: 1rem;
              padding: 0.8rem 0.9rem;
            }

            .dashboard-title {
              font-size: 1.8rem;
              margin-bottom: 1.2rem;
            }

            .logout-button {
              font-size: 1rem;
              padding: 0.8rem 0.9rem;
            }
          }

          @media (max-width: 480px) {
            .dashboard-container {
              padding: 4vw 4vw;
            }

            .dashboard-button {
              font-size: 0.95rem;
              padding: 0.75rem;
              min-height: 55px;
            }

            .dashboard-title {
              font-size: 1.5rem;
              margin-bottom: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
}
