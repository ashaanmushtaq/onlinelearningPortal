import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {exams} from './examData'

export default function Exams() {
  const [expandedExamId, setExpandedExamId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedExamId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="exam-wrapper">
          <motion.h2
            className="exam-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            📘 Upcoming Exams & Quizzes
          </motion.h2>

          <div className="exam-list">
            {exams.map((exam) => (
              <motion.div
                key={exam.id}
                className="exam-card"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(0,0,0,0.12)' }}
              >
                <motion.button
                  className="exam-header"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleExpand(exam.id)}
                  aria-expanded={expandedExamId === exam.id}
                  aria-controls={`exam-content-${exam.id}`}
                >
                  <span>{exam.title}</span>
                  <span>{expandedExamId === exam.id ? '−' : '+'}</span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {expandedExamId === exam.id && (
                    <motion.div
                      className="exam-content"
                      id={`exam-content-${exam.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p><strong>Date:</strong> {new Date(exam.date).toLocaleDateString()}</p>
                      <p><strong>Description:</strong> {exam.description}</p>

                      {/* Check for files */}
                      {/* {exam.files && (
                        <p><strong>Files:</strong></p>
                        <ul className="file-list">
                          {exam.files.map((file, index) => (
                            <motion.li
                              key={index}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.05 * index }}
                            >
                              📎 {file}
                            </motion.li>
                          ))}
                        </ul>
                      )} */}

                      {/* Check for labs */}
                      {exam.labs && exam.labs.length > 0 && (
                        <div className="labs-section">
                          {exam.labs.map((lab, index) => (
                            <motion.div
                              key={index}
                              className="lab-card"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              <h4>{lab.title}</h4>
                              <p>{lab.description}</p>
                              <p><strong>Case Study:</strong> {lab.caseStudy.scenario}</p>
                              <ul className="file-list">
                                {lab.files?.map((file, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.05 * index }}
                                  >
                                    📎 {file}
                                  </motion.li>
                                ))}
                              </ul>
                              <h5>Tasks:</h5>
                              <ul>
                                {lab.tasks.map((task, index) => (
                                  <li key={index}>
                                    <strong>{task.type}: </strong>{task.question}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Check for questions in the Midterm */}
                      {(exam.questions || exam.queries) && (exam.questions || exam.queries).length > 0 && (
                        <div className="questions-section">
                          <h4>Questions:</h4>
                          {(exam.questions || exam.queries).map((question, index) => (
                            <motion.div key={index} className="question-card">
                              <h5>{question.question}</h5>
                              {question.subquestions && (
                                <ul>
                                  {question.subquestions.map((subquestion, subIndex) => (
                                    <li key={subIndex}>{subquestion.text}</li>
                                  ))}
                                </ul>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      )}

                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* GLOBAL RESET */
        *, *::before, *::after {
          box-sizing: border-box;
        }
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow-x: hidden; /* Prevent horizontal scroll */
          background: linear-gradient(145deg, #e0f7fa, #f1f8e9);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Outer wrapper to center content and fill full viewport width */
        .page-wrapper {
          min-height: 100vh;
          width: 100%;
          padding: 4rem 1rem 3rem;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          box-sizing: border-box;
        }

        /* Main content container */
        .exam-wrapper {
          background: white;
          max-width: 900px;
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          padding: 2.5rem 3rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Title styling */
        .exam-title {
          font-size: clamp(1.6rem, 3vw, 2.5rem);
          color: #0f172a;
          margin-bottom: 3rem;
          text-align: center;
          user-select: none;
        }

        /* Exam list container */
        .exam-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Individual exam card */
        .exam-card {
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 6px 22px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          display: flex;
          flex-direction: column;
          cursor: default;
          user-select: none;
        }

        .exam-card:hover {
          box-shadow: 0 10px 28px rgba(0,0,0,0.12);
        }

        /* Header button */
        .exam-header {
          background: #38bdf8;
          color: white;
          padding: 16px 24px;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          font-weight: 600;
          border: none;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.3s ease;
        }

        .exam-header:hover {
          background: #0ea5e9;
        }

        /* Expanded content area */
        .exam-content {
          background: #f8fafc;
          padding: 16px 24px;
          font-size: clamp(0.9rem, 2vw, 1rem);
          color: #334155;
          overflow: hidden;
          user-select: text;
        }
        .questions-section {
          margin-top: 20px;
        }
        .question-card {
          background: #ffffff;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 16px;
        }
        .question-card h5 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        /* Files list */
        .file-list {
          margin-top: 8px;
          padding-left: 18px;
          list-style: none;
        }

        .file-list li {
          margin-bottom: 6px;
          color: #475569;
          word-break: break-word;
        }
        
        .labs-section {
          margin-top: 20px;
          padding: 10px;
          background: #f1f5f9;
          border-radius: 8px;
        }
        .lab-card {
          padding: 16px;
          background: #fff;
          margin-top: 10px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .lab-card h4 {
          margin-bottom: 10px;
        }

        /* RESPONSIVE */

        @media (max-width: 768px) {
          .exam-wrapper {
            padding: 2rem 2rem;
          }
          .exam-header {
            padding: 14px 18px;
          }
          .exam-content {
            padding: 14px 18px;
          }
          .file-list {
            padding-left: 16px;
          }
        }

        @media (max-width: 480px) {
          .exam-wrapper {
            padding: 1.5rem 1.5rem;
          }
          .exam-title {
            margin-bottom: 1.5rem;
          }
          .file-list {
            padding-left: 14px;
          }
          .file-list li {
            font-size: 0.9rem;
          }
          .exam-header {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
