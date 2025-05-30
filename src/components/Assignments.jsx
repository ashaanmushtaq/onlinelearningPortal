import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { assignments } from './assignmentsData';

export default function Assignments() {
  const [expanded, setExpanded] = useState(null);
  const toggleExpand = (id) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <>
    <div className="page-wrapper">
  <div className="assignments-wrapper">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="assignments-title"
    >
      📘 Lab Content
    </motion.h1>

    <div className="assignment-list">
      {assignments.map((item, index) => (
        <motion.div
          key={item.id}
          className={`assignment-card ${expanded === item.id ? 'expanded' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index, type: 'spring', stiffness: 100 }}
        >
          <button
            onClick={() => toggleExpand(item.id)}
            aria-expanded={expanded === item.id}
            aria-controls={`assignment-content-${item.id}`}
            className="assignment-header"
          >
            {item.title}
          </button>

          <AnimatePresence initial={false}>
            {expanded === item.id && (
              <motion.div
                id={`assignment-content-${item.id}`}
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto', marginTop: 16 },
                  collapsed: { opacity: 0, height: 0, marginTop: 0 },
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <p><strong>Description:</strong> {item.description}</p>
                <p><strong>Due Date:</strong> {item.dueDate}</p>

                <div className="assignment-details">
                  {item.content?.map((section, i) => (
                    <div key={i} className="section-block">
                      <h3>{section.section}</h3>
                      {section.description && <p>{section.description}</p>}

                      {/* Correctly handle 'example' content in all formats */}
                      {section.example && (
                        <>
                          <strong>Example:</strong>
                          {typeof section.example === 'string' ? (
                            <p>{section.example}</p>
                          ) : Array.isArray(section.example) ? (
                            <ul>
                              {section.example.map((ex, idx) =>
                                typeof ex === 'string' ? (
                                  <li key={idx}>{ex}</li>
                                ) : (
                                  <li key={idx}>
                                    <pre><code>{ex.query}</code></pre>
                                    <p>{ex.explanation}</p>
                                  </li>
                                )
                              )}
                            </ul>
                          ) : null}
                        </>
                      )}

                      {section.syntax && (
                        <p>
                          <strong>Syntax:</strong>
                          <pre><code>{section.syntax}</code></pre>
                        </p>
                      )}

                      {section.features && <ul>{section.features.map((feat, idx) => <li key={idx}>{feat}</li>)}</ul>}
                      {section.components && <ul>{section.components.map((comp, idx) => <li key={idx}>{comp}</li>)}</ul>}
                      {section.types && <ul>{section.types.map((type, idx) => <li key={idx}>{type}</li>)}</ul>}
                      {section.subTypes && <ul>{section.subTypes.map((sub, idx) => <li key={idx}><strong>{sub.type}:</strong> {sub.description}</li>)}</ul>}
                      {section.functions && <ul>{section.functions.map((func, idx) => <li key={idx}>{func}</li>)}</ul>}
                      {section.normalForms && <ul>{section.normalForms.map((nf, idx) => <li key={idx}>{nf}</li>)}</ul>}
                      {section.examples && <ul>{section.examples.map((ex, idx) => <li key={idx}>{ex}</li>)}</ul>}

                      {section.commands && Array.isArray(section.commands) && (
                        <ul>
                          {section.commands.map((cmd, idx) =>
                            typeof cmd === 'object' ? (
                              <li key={idx}>
                                <strong>{cmd.command}</strong>
                                <pre><code>{cmd.example}</code></pre>
                              </li>
                            ) : (
                              <li key={idx}>{cmd}</li>
                            )
                          )}
                        </ul>
                      )}

                      {section.note && <p><strong>Note:</strong> {section.note}</p>}

                      {section.steps && (
                        <div>
                          <strong>Steps:</strong>
                          <ul>
                            {section.steps.map((step, idx) => (
                              <li key={idx}><code>{step}</code></li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {section.points && (
                        <div>
                          <strong>Best Practices:</strong>
                          <ul>
                            {section.points.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {section.backupCommand && (
                        <>
                          <p><strong>Backup Command:</strong></p>
                          <pre><code>{section.backupCommand}</code></pre>
                        </>
                      )}
                      {section.restoreCommand && (
                        <>
                          <p><strong>Restore Command:</strong></p>
                          <pre><code>{section.restoreCommand}</code></pre>
                        </>
                      )}
                    </div>
                  ))}
                </div>
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
          overflow-x: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #dbeafe, #93c5fd);
        }

        .page-wrapper {
          min-height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 3rem 1rem;
          box-sizing: border-box;
        }
.assignment-details {
  width: 100%;
  overflow-x: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.assignment-details pre,
.assignment-details code {
  max-width: 100%;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
  background-color: #f1f5f9;
  padding: 8px 12px;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.assignment-card,
.assignment-card * {
  max-width: 100%;
  box-sizing: border-box;
}

        .assignments-wrapper {
          max-width: 1100px;
          width: 100%;
          background: white;
          border-radius: 16px;
          padding: 2rem 3rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          box-sizing: border-box;
        }

        .assignments-title {
          text-align: center;
          font-size: clamp(1.8rem, 2vw + 1rem, 2.8rem);
          color: #1e293b;
          margin-bottom: 3rem;
          user-select: none;
        }

        .assignment-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        /* Ensure only one card appears per row on larger screens */
        @media (min-width: 1200px) {
          .assignment-list {
            grid-template-columns: 1fr;
          }
        }

        .assignment-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px 24px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          cursor: default;
          user-select: none;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          display: flex;
          flex-direction: column;
          transform: translateY(0);
          background: #ffffff;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .assignment-card.expanded {
          background: #f0f4ff;
          transform: translateY(-5px);
          padding-bottom: 24px;
        }

        .assignment-card:hover {
          box-shadow: 0 10px 28px rgba(0,0,0,0.12);
        }

        .assignment-card p {
          color: #475569;
          margin: 6px 0;
          font-size: 1rem;
          line-height: 1.4;
        }

        .files-section {
          margin-top: 16px;
        }

        .files-section strong {
          color: #334155;
          font-weight: 600;
          display: block;
          margin-bottom: 8px;
          font-size: 1rem;
        }

        .files-section ul {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }

        .files-section li {
          margin-bottom: 6px;
        }

        .files-section a {
          text-decoration: none;
          color: #10b981;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          word-break: break-word;
        }

        .files-section a:hover {
          color: #059669;
        }

        @media (max-width: 767px) {
          .assignments-wrapper {
            padding: 1.5rem 1.5rem;
            margin: 0 0.5rem;
          }
        }

        @media (max-width: 400px) {
          .assignments-wrapper {
            padding: 1rem 1rem;
          }
          .assignment-card p,
          .files-section strong,
          .files-section a {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
