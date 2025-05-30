export const exams = [
    {
      id: 1,
      title: "Quiz 1: Lab 1 to Lab 3",
      date: "2025-06-01",
      description: "This quiz covers the basics of the subject including key concepts.",
      labs: [
        {
          title: "Lab 2: Creating Databases & Tables",
          description: "Design and implement tables for a College Course Registration System using SQL.",
          caseStudy: {
            scenario: "You are working on developing a College Course Registration System for a university. The system needs to manage data related to courses, students, and registrations. Your task is to design the databases that will support this system. The system should allow students to register for courses, track course prerequisites, and manage student information.",
            requirements: [
              "A Courses table to store information about courses.",
              "A Students table to store information about students.",
              "A Registrations table to store which students have registered for which courses."
            ]
          },
          tasks: [
            { question: "Write the SQL command to create the database `CollegeCourses`.", type: "SQL" },
            { question: "Write a `CREATE TABLE` command for the `Courses` table with the following columns: `CourseID`, `CourseName`, `Credits`, `Department`, and a `PRIMARY KEY` on `CourseID`.", type: "SQL" },
            { question: "Design the `Students` table ensuring `StudentID` is the primary key, `FullName` allows up to 100 characters, and add `Email` as a `VARCHAR` of 100 characters.", type: "SQL" },
            { question: "Explain why primary keys are necessary in both the `Courses` and `Students` tables. What issues might arise if we skip defining them?", type: "Theory" },
            { question: "What would the structure of a `Registrations` table look like? Include column names and types. What kind of relationship is being modeled here between `Students` and `Courses`?", type: "Design" }
          ]
        },
        {
          title: "Lab 3: Inserting Data into Tables",
          description: "Practice inserting and updating records in a Hospital Patient Management System.",
          caseStudy: {
            scenario: "You are part of the development team for a Hospital Patient Management System. The system tracks patients' details, their conditions, and the doctors they are assigned to. The hospital also needs to update patient records when necessary, and handle deletions for cases like patient discharge or incorrect records.",
            requirements: [
              "A `Patients` table to store patient data.",
              "A `Doctors` table to store doctor details.",
              "A `PatientDoctors` table to store which doctors are assigned to which patients."
            ]
          },
          tasks: [
            { question: "Insert the following patient record into the `Patients` table: `PatientID: 101`, `Name: 'Sarah Khan'`, `Age: 29`, `Disease: 'Malaria'`, `AdmitDate: '2025-05-01'.", type: "SQL" },
            { question: "Insert two more patients, one of whom has not yet been diagnosed (Disease unknown). Explain how you will handle this in SQL.", type: "SQL + Theory" },
            { question: "Insert two doctors into the `Doctors` table. Use appropriate data for `DoctorID`, `DoctorName`, and `Specialization`.", type: "SQL" },
            { question: "Update Sarah Khan's age to 30 in the `Patients` table.", type: "SQL" },
            { question: "Delete the patient record with `PatientID: 104`. Also, explain when `DELETE` should be preferred over `DROP` in this case.", type: "SQL + Theory" }
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "Quiz 2: Lab 4 to Lab 7",
      "date": "2025-05-30",
      "description": "SQL queries related to employee, student, and order management.",
      "queries": [
        {
          "question": "📌 **Instruction**: Before you write the query, carefully read each scenario, understand the logic behind it, and think about how to structure your query. Once you've brainstormed the logic, write the query for the following scenario:",
          "subquestions": [
            {
              "text": "Write an SQL statement to display the names of all employees who work in the department with ID 5 or 6."
            },
            {
              "text": "Write an SQL statement to display the names of all students who have scored marks greater than 90 but less than 95."
            },
            {
              "text": "Write an SQL statement to show the names of teachers whose name starts with 'S' or ends with 'N'."
            },
            {
              "text": "Write an SQL statement to display the student names and their marks for all students who are older than 18 years but younger than 25 years, sorted by student name in ascending order."
            },
            {
              "text": "Write an SQL query to find the total number of students enrolled in each program."
            },
            {
              "text": "Write an SQL query to display the highest and lowest salary from the employee table."
            },
            {
              "text": "Write an SQL query to display the sum of all orders placed by customers who are from 'New York' and group the results by the city."
            },
            {
              "text": "Write an SQL statement to display the average marks of students, grouped by their course name."
            },
            {
              "text": "Write an SQL query to display the total number of orders placed by each customer, grouped by customer ID, and only show those customers who have placed more than 10 orders."
            },
            {
              "text": "Write an SQL query to display the total salary of employees in each department, but only show those departments where the total salary is greater than 100,000."
            }
          ]
        },
      ]
    },

    {
      "id": 3,
      "title": "Midterm Exam",
      "date": "2025-06-15",
      "description": "Midterm examination includes all lectures up to Week 7.",
      "questions": [
        {
          "question": "Create a Table",
          "subquestions": [
            {
              "text": "Write an SQL command to create a table called 'Employees' with the following fields: EmployeeID (INT), Name (VARCHAR), Department (VARCHAR), Salary (DECIMAL)"
            }
          ]
        },
        {
          "question": "Inserting Data",
          "subquestions": [
            {
              "text": "Write an SQL query to insert the following data into the 'Employees' table: EmployeeID: 101, Name: 'John Doe', Department: 'HR', Salary: 6000; EmployeeID: 102, Name: 'Alice Smith', Department: 'IT', Salary: 7000"
            },
            {
              "text": "Insert three new records into a 'Courses' table. The fields for this table are: CourseID (INT), CourseName (VARCHAR), CreditHours (INT)"
            }
          ]
        },
        {
          "question": "Basic Queries",
          "subquestions": [
            {
              "text": "Write an SQL query to fetch the names of all employees from the 'Employees' table."
            },
            {
              "text": "Write an SQL query to retrieve the names and salaries of all employees who earn more than $5000."
            }
          ]
        },
        {
          "question": "Filtering & Sorting Data",
          "subquestions": [
            {
              "text": "Write an SQL query to retrieve the names of all employees who work in the 'IT' department and earn between $4000 and $8000."
            },
            {
              "text": "Write an SQL query to fetch all courses from the 'Courses' table, sorting the results by CreditHours in descending order."
            },
            {
              "text": "Write an SQL query to find all students whose names start with 'A' and whose age is between 18 and 25."
            }
          ]
        },
        {
          "question": "Aggregate Functions",
          "subquestions": [
            {
              "text": "Write an SQL query to calculate the total salary of all employees in the 'Sales' department."
            },
            {
              "text": "Write an SQL query to find the average salary of employees in the 'HR' department."
            },
            {
              "text": "Write an SQL query to count the number of employees who have a salary greater than $5000."
            }
          ]
        },
        {
          "question": "Grouping Data",
          "subquestions": [
            {
              "text": "Write an SQL query to find the total number of employees in each department (grouped by department)."
            },
            {
              "text": "Write an SQL query to calculate the maximum, minimum, and average salary for employees in the 'Marketing' department."
            },
            {
              "text": "Write an SQL query to list the number of students enrolled in each course, but only show courses where more than 10 students are enrolled."
            }
          ]
        },
        {
          "question": "Complex Queries",
          "subquestions": [
            {
              "text": "Write an SQL query to display the name, department, and salary of all employees who have been with the company for more than 5 years."
            },
            {
              "text": "Write an SQL query to display the course name and credit hours for all courses in the 'Business Administration' program, where the number of credit hours is greater than or equal to 3."
            }
          ]
        }
      ]
    },
    

    
  ];