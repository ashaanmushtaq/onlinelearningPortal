import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function CourseMaterial() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const materials = [
    {
      id: 1,
      title: 'Week 1: Introduction to DBMS & MySQL',
      topics: [
        {
          name: 'DBMS & MySQL?',
          videoUrl: 'https://www.youtube.com/embed/mzAAX-FShVY', // Corrected URL format
          description: 'Understanding what is database, the role of DBMS, and getting familiar with the MySQL interface.',
        },
      ],
    },
    {
      id: 2,
      title: 'Week 2: Creating Databases & Tables',
      topics: [
        {
          name: 'Create database and table, auto and manual',
          videoUrl: 'https://www.youtube.com/embed/S4Ii6xnbFIQ',
          description: 'Using CREATE DATABASE and CREATE TABLE commands to design and set up databases.',
        }
      ],
    },
    
    {
      id: 3,
      title: 'Week 3: Inserting Data',
      topics: [
        {
          name: 'Data Insertion',
          videoUrl: 'https://www.youtube.com/embed/YoGRtjY4rf4',
          description: 'Inserting data into tables using the INSERT INTO command.',
        },
        {
          name: 'Short Quiz',
          videoUrl: 'https://www.youtube.com/embed/O1ciji1z5Wo?list=PLeqv6GWEdT1_dRgNUYFt7Fbu_sXDzoRB5',
          description: '',
        },        
      ],
    },
    {
      id: 4,
      title: 'Week 4: Basic Queries',
      topics: [
        {
          name: 'Use of SELECT, WHERE, ORDER BY Quary',
          videoUrl: 'https://www.youtube.com/embed/AOKufZEMMMA?list=PLeqv6GWEdT1_dRgNUYFt7Fbu_sXDzoRB5',
          description: 'Retrieving data using SELECT, applying conditions with WHERE, and sorting with ORDER BY.',
        },
      ],
    },
    {
      id: 5,
      title: 'Week 5: Filtering & Sorting Data',
      topics: [
        {
          name: 'Apply Filters',
          videoUrl: 'https://www.youtube.com/embed/PrRp9ax0wl4?list=PLeqv6GWEdT1_dRgNUYFt7Fbu_sXDzoRB5',
          description: 'Applying filters using AND, OR, BETWEEN, LIKE, and IN clauses.',
        },
      ],
    },
    {
      id: 6,
      title: 'Week 6: Aggregate Functions',
      topics: [
        {
          name: 'Use of Functoins',
          videoUrl: 'https://www.youtube.com/embed/93hXCutz8fg',
          description: 'Using functions like SUM, COUNT, AVG, MIN, and MAX to perform calculations.',
        },
      ],
    },
    {
      id: 7,
      title: 'Week 7: Grouping Data',
      topics: [
        {
          name: 'Use of GROUP BY ans HAVING',
          videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1',
          description: 'Analyzing grouped data using GROUP BY and filtering with HAVING.',
        },
      ],
    },
    {
      id: 8,
      title: 'Week 8: 	Table Relationships',
      topics: [
        {
          name: 'Understanding Table Relationships',
          videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1',
          description: 'Understanding and implementing primary keys, foreign keys, and linking tables.',
        },
      ],
    },
    {
      id: 9,
      title: 'Week 9: Joins (INNER, LEFT, RIGHT)',
      topics: [
        {
          name: 'Use of Joins',
          videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1',
          description: 'Creating complex queries by connecting multiple tables using different types of joins.',
        },
      ],
    },
    {
      id: 10,
      title: 'Week 10: Subqueries',
      topics: [
        {
          name: 'Advanced data retrieval',
          videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1',
          description: 'Writing nested queries within other queries for advanced data retrieval.',
        },
      ],
    },
    {
      id: 11,
      title: 'Week 11: Table Modification',
      topics: [
        {
          name: 'Modifying Data and Tables',
          videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1',
          description: 'Modifying existing tables and data using UPDATE, DELETE, ALTER TABLE, and DROP..',
        },
      ],
    },
    {
      id: 12,
      title: 'Week 12: Views',
      topics: [
        {
          name: 'Understanding of Views',
          videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1',
          description: 'Creating and using views with CREATE VIEW to simplify complex queries.',
        },
      ],
    },
    {
      id: 13,
      title: 'Week 13: Indexing & Constraints',
      topics: [
        {
          name: 'Data Enforcment',
          videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1',
          description: 'Improving performance and enforcing data rules using indexes and constraints.',
        },
      ],
    },
    {
      id: 14,
      title: 'Week 14: Normalization',
      topics: [
        {
          name: 'Data Improvment',
          videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1',
          description: 'Reducing data redundancy and improving structure using 1NF, 2NF, and 3NF.',
        },
      ],
    },
    {
      id: 15,
      title: 'Week 15: Final Term Exam',
      topics: [
        {
          name: 'Best of Luck..!',
          videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1',
          description: 'Designing a complete database and practicing all types of queries for revision.',
        },
      ],
    },
  ];

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="background-wrapper">
        <div className="course-wrapper">
          <motion.h2
            className="course-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🎓 Your Learning Path
          </motion.h2>

          <div className="timeline">
            {materials.map((week, i) => (
              <motion.div
                key={week.id}
                className={`timeline-item ${expanded === week.id ? 'expanded' : ''}`}
                layout
              >
                <button
                  className="timeline-header"
                  onClick={() => toggleExpand(week.id)}
                  aria-expanded={expanded === week.id}
                  aria-controls={`week-content-${week.id}`}
                >
                  <span className="week-marker">{`W${i + 1}`}</span>
                  <span className="week-title">{week.title}</span>
                  <motion.span
                    className="chevron"
                    animate={{ rotate: expanded === week.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  >
                    {expanded === week.id ? <FaChevronUp /> : <FaChevronDown />}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {expanded === week.id && (
                    <motion.div
                      id={`week-content-${week.id}`}
                      className="timeline-content"
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto', marginTop: 20 },
                        collapsed: { opacity: 0, height: 0, marginTop: 0 },
                      }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      {week.topics.map((topic, idx) => (
                        <div key={idx} className="topic">
                          <h4>{topic.name}</h4>
                          <p>{topic.description}</p>
                          <div className="video-box">
                            <iframe
                              src={topic.videoUrl}
                              title={topic.name}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <button className="back-btn" onClick={() => navigate('/dashboard')}>
            ← Back to Dashboard
          </button>
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }
        body, html, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow-x: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f9fafb;
          color: #1f2937;
        }

        .background-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          width: 100%;
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .course-wrapper {
          background: white;
          max-width: 900px;
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          padding: 3rem 2.5rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 1rem;
        }

        .course-title {
          font-size: 2.8rem;
          font-weight: 900;
          margin-bottom: 3rem;
          color: #2e3a59;
          user-select: none;
          text-align: center;
          letter-spacing: 0.03em;
        }

        .timeline {
          width: 100%;
          position: relative;
          padding-left: 4rem;
          border-left: 3px solid #a5b4fc;
          margin-bottom: 3rem;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3.5rem;
          cursor: pointer;
          transition: background 0.3s ease;
          user-select: none;
        }

        .timeline-item.expanded {
          background: #eef2ff;
          border-radius: 18px;
          padding: 1.6rem 1.8rem 2rem 4rem;
        }

        .week-marker {
          position: absolute;
          left: -4.1rem;
          top: 50%;
          transform: translateY(-50%);
          background: #6366f1;
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 12px rgba(99, 102, 241, 0.6);
          user-select: none;
          transition: background 0.3s ease;
        }

        .week-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #374151;
          flex-grow: 1;
          text-align: left;
        }

        .timeline-header {
          width: 100%;
          background: transparent;
          border: none;
          padding: 0.6rem 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          outline-offset: 3px;
          transition: color 0.3s ease;
          user-select: none;
        }
        .timeline-header:hover {
          color: #4f46e5;
        }

        .chevron {
          font-size: 1.5rem;
          color: #6b7280;
          user-select: none;
          flex-shrink: 0;
          transition: color 0.3s ease;
        }

        .timeline-header:hover .chevron {
          color: #4f46e5;
        }

        .timeline-content {
          overflow: hidden;
          padding-top: 1rem;
        }

        .topic {
          margin-bottom: 2rem;
          user-select: text;
        }
        .topic h4 {
          font-size: 1.25rem;
          color: #4338ca;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        .topic p {
          font-size: 1rem;
          line-height: 1.4;
          color: #4b5563;
          margin-bottom: 1rem;
        }

        .video-box {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 25px rgba(67, 56, 202, 0.2);
          background: #000;
          transition: box-shadow 0.3s ease;
        }
        .video-box:hover {
          box-shadow: 0 20px 45px rgba(67, 56, 202, 0.3);
        }
        .video-box iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .back-btn {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.15rem;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.3s ease;
          user-select: none;
          box-shadow: 0 10px 25px rgba(67, 56, 202, 0.3);
          margin-top: 2rem;
          width: fit-content;
        }
        .back-btn:hover {
          background: #6366f1;
          box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5);
        }

        @media (max-width: 768px) {
          .background-wrapper {
            padding: 2rem 1rem;
          }
          .course-wrapper {
            padding: 2rem 1.5rem;
            border-radius: 20px;
          }
          .course-title {
            font-size: 2rem;
          }
          .timeline {
            padding-left: 2.5rem;
            border-left-width: 2.5px;
          }
          .week-marker {
            width: 2.4rem;
            height: 2.4rem;
            font-size: 1rem;
            left: -3rem;
          }
          .week-title {
            font-size: 1.15rem;
          }
          .timeline-header {
            padding: 0.5rem 0.8rem;
          }
          .topic h4 {
            font-size: 1.1rem;
          }
          .topic p {
            font-size: 0.95rem;
          }
          .back-btn {
            width: 100%;
            font-size: 1rem;
            padding: 0.9rem 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .timeline {
            padding-left: 2.5rem;
          }
          .week-marker {
            left: -2.5rem;
            width: 2rem;
            height: 2rem;
          }
          .week-title {
            font-size: 1rem;
          }
          .topic h4 {
            font-size: 1rem;
          }
          .topic p {
            font-size: 0.85rem;
          }
          .video-box {
            padding-bottom: 56.25%;
          }
        }
      `}</style>
    </>
  );
}
