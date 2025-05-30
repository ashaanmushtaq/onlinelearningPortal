// assignmentsData.js

export const assignments = [
    {
        id: 1,
        title: 'Lab 1: Introduction to DBMS & MySQL',
        description: 'Complete overview of DBMS concepts and MySQL fundamentals.',
        dueDate: '2025-06-25',
        // files: ['https://drive.google.com/your-lab1-notes-url'],
        content: [
          {
            section: "What is a Database?",
            description: "A Database is a systematic collection of data. Databases allow for efficient storage, management, and retrieval of data.",
            example: "Think of your phone contacts list. It's a simple database: Name, Phone Number, Address, etc."
          },
          {
            section: "Types of Databases",
            description: "Databases can be categorized into two main types.",
            subTypes: [
              { type: "Relational Database", description: "Stores data in tables (rows and columns). Examples: MySQL, PostgreSQL." },
              { type: "Non-Relational Database (NoSQL)", description: "Stores data in formats like key-value pairs or documents. Examples: MongoDB, Cassandra." }
            ]
          },
          {
            section: "What is DBMS?",
            description: "A DBMS is software that helps you create, manage, and interact with databases. It provides an interface for users to work with data and ensures its integrity, security, and accessibility.",
            functions: [
              "Data Storage Management: Stores data in a structured format.",
              "Data Retrieval: Efficiently retrieves data using queries.",
              "Data Manipulation: Allows modification of data (Insert, Update, Delete).",
              "Data Security: Ensures that only authorized users can access or modify data.",
              "Concurrency Control: Manages simultaneous access to data by multiple users.",
              "Backup and Recovery: Helps in recovering data in case of failure."
            ]
          },
          {
            section: "What is MySQL?",
            description: "MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for querying and managing data.",
            features: [
              "Open-source: Free to use, with a large community for support.",
              "SQL-based: Uses SQL to communicate with databases.",
              "Scalability: Can handle large amounts of data.",
              "Speed: Fast and efficient in handling data queries.",
              "Cross-platform: Works on various platforms like Windows, Linux, and macOS."
            ]
          },
          {
            section: "MySQL Architecture",
            description: "MySQL has a client-server architecture where the MySQL Server handles data management, and the Client (the user) interacts with it using commands.",
            components: [
              "Client: The interface where users send requests (queries) to the MySQL server.",
              "Server: The component that processes SQL queries, manages databases, and handles data storage."
            ]
          },
          {
            section: "MySQL Interface",
            description: "MySQL can be interacted with through a Command Line Interface (CLI) or a Graphical User Interface (GUI).",
            types: [
              "Command Line: A text-based interface where you write SQL commands.",
              "GUI: Tools like phpMyAdmin or MySQL Workbench offer a visual interface to interact with the database."
            ]
          },
          {
            section: "Basic SQL Commands in MySQL",
            commands: [
              { command: "CREATE DATABASE", example: "CREATE DATABASE my_database;" },
              { command: "USE DATABASE", example: "USE my_database;" },
              { command: "CREATE TABLE", example: "CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), age INT);" },
              { command: "INSERT INTO", example: "INSERT INTO students (name, age) VALUES ('Ali', 20);" },
              { command: "SELECT", example: "SELECT * FROM students;" },
              { command: "UPDATE", example: "UPDATE students SET age = 21 WHERE name = 'Ali';" },
              { command: "DELETE", example: "DELETE FROM students WHERE name = 'Ali';" }
            ]
          },
          {
            section: "Data Types in MySQL",
            description: "MySQL supports several data types to store different kinds of information.",
            types: [
              "INT: For integer numbers.",
              "VARCHAR: For variable-length strings (text).",
              "TEXT: For long strings or paragraphs.",
              "DATE: For storing date values (e.g., '2025-05-30').",
              "FLOAT: For decimal numbers."
            ]
          },
          {
            section: "Constraints in MySQL",
            description: "Constraints ensure the data's integrity and consistency. Some common constraints are:",
            examples: [
              "PRIMARY KEY: Uniquely identifies each record in a table.",
              "FOREIGN KEY: Ensures that the value in one table matches a value in another table.",
              "NOT NULL: Ensures that a column cannot have a NULL (empty) value.",
              "UNIQUE: Ensures all values in a column are unique."
            ],
            example: "CREATE TABLE employees (emp_id INT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) UNIQUE, department_id INT, FOREIGN KEY (department_id) REFERENCES departments(id));"
          },
          {
            section: "Normalization",
            description: "Normalization is the process of organizing data in a database to reduce redundancy and dependency.",
            normalForms: [
              "1st Normal Form (1NF): Eliminate duplicate data.",
              "2nd Normal Form (2NF): Eliminate partial dependency (non-prime attributes must depend on the entire primary key).",
              "3rd Normal Form (3NF): Eliminate transitive dependency (attributes should depend only on the primary key)."
            ]
          },
          {
            section: "Common MySQL Operations",
            description: "These are basic operations to interact with MySQL databases.",
            commands: [
              "SHOW DATABASES: Lists all databases in MySQL.",
              "SHOW TABLES: Lists all tables in the selected database.",
              "DESCRIBE TABLE: Shows the structure of a table."
            ],
            example: "SHOW DATABASES;\nUSE my_database;\nSHOW TABLES;\nDESCRIBE students;"
          },
          {
            section: "Backup and Restore in MySQL",
            description: "Backup and restore operations allow you to save and recover your database.",
            backupCommand: "mysqldump -u username -p my_database > backup.sql",
            restoreCommand: "mysql -u username -p my_database < backup.sql"
          },
          {
            section: "Conclusion",
            description: "A Database Management System (DBMS) is essential for organizing, storing, and retrieving data efficiently. MySQL is one of the most popular DBMSs used in web applications, and understanding its fundamentals will give you a strong foundation for database management."
          }
        ]
      },      
      {
        id: 2,
        title: 'Lab 2: Creating Databases & Tables',
        description: 'Learn how to use CREATE DATABASE and CREATE TABLE commands in MySQL to design and set up databases.',
        dueDate: '2025-06-30',
        // files: ['https://drive.google.com/your-lab2-notes-url'],
        content: [
          {
            section: "What is CREATE DATABASE?",
            description: "The CREATE DATABASE command in MySQL is used to create a new database. It serves as the container for tables, views, and other database objects.",
            syntax: "CREATE DATABASE database_name;",
            example: "CREATE DATABASE SchoolDB;"
          },
          {
            section: "Using the USE Command",
            description: "The USE command tells MySQL which database you want to work in. All further queries will be executed inside this database.",
            syntax: "USE database_name;",
            example: "USE SchoolDB;"
          },
          {
            section: "What is CREATE TABLE?",
            description: "The CREATE TABLE command is used to define a new table in a selected database. You specify the table name, column names, their data types, and any constraints if required.",
            syntax: "CREATE TABLE table_name (column1 datatype, column2 datatype, ...);",
            example: "CREATE TABLE Students (StudentID INT, Name VARCHAR(50), Age INT, Class VARCHAR(10));"
          },
          {
            section: "Basic Structure of a Table",
            description: "Tables are made of columns and rows. Each column has a name and data type. Data types define the kind of values the column can hold.",
            columns: [
              "StudentID: INT - A number representing the student's ID.",
              "Name: VARCHAR(50) - A string with a maximum of 50 characters.",
              "Age: INT - A number for the student’s age.",
              "Class: VARCHAR(10) - A short text for class name/section."
            ]
          },
          {
            section: "Step-by-Step Example: Setting Up a School Database",
            description: "This is a practical example of creating a database and two related tables inside it.",
            steps: [
              "CREATE DATABASE SchoolDB;",
              "USE SchoolDB;",
              "CREATE TABLE Teachers (TeacherID INT, Name VARCHAR(50), Subject VARCHAR(30));",
              "CREATE TABLE Students (StudentID INT, Name VARCHAR(50), Age INT, Class VARCHAR(10));"
            ]
          },
          {
            section: "Common Data Types in Table Design",
            description: "These data types help in defining the kind of data a column can store.",
            types: [
              "INT: Stores integer numbers. Example: 1, 25, 100",
              "VARCHAR(n): Stores text with a maximum of n characters. Example: 'Ali', 'Science'",
              "DATE: Stores dates. Example: '2025-06-01'",
              "FLOAT: Stores decimal numbers. Example: 75.5"
            ]
          },
          {
            section: "Constraints in CREATE TABLE",
            description: "Constraints are rules applied to columns to ensure data accuracy and integrity.",
            examples: [
              "PRIMARY KEY: Ensures the column has unique and non-null values.",
              "NOT NULL: Column cannot have NULL (empty) values.",
              "UNIQUE: Ensures no duplicate values in the column.",
              "FOREIGN KEY: Links one table’s column to another table’s column."
            ],
            example: "CREATE TABLE Students (StudentID INT PRIMARY KEY, Name VARCHAR(50) NOT NULL, Class VARCHAR(10));"
          },
          {
            section: "Viewing Table Information",
            description: "You can inspect your table structure using the DESCRIBE command.",
            example: "DESCRIBE Students;"
          },
          {
            section: "Conclusion",
            description: "Creating a database and its tables is the foundation of any database application. Using CREATE DATABASE and CREATE TABLE properly ensures a strong structure for storing and managing data efficiently."
          }
        ]
      },
      
      {
        id: 3,
        title: "Lab 3: Inserting Data",
        description: "Inserting data into tables using the INSERT INTO command in MySQL.",
        dueDate: "2025-07-05",
        // files: ['https://drive.google.com/your-lab3-notes-url'],
        content: [
          {
            section: "What is INSERT INTO?",
            description: "The INSERT INTO command in MySQL is used to add new rows (records) into a table. You specify the table name, the columns you want to insert into, and the values to insert.",
            syntax: "INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);",
            example: "INSERT INTO Students (StudentID, Name, Age, Class) VALUES (1, 'Ali', 20, '10-A');"
          },
          {
            section: "Inserting into All Columns",
            description: "If you're inserting values for all columns in the same order they appear in the table, you can skip column names.",
            syntax: "INSERT INTO table_name VALUES (value1, value2, ...);",
            example: "INSERT INTO Students VALUES (2, 'Sara', 19, '10-B');"
          },
          {
            section: "Inserting Multiple Rows",
            description: "You can insert multiple rows in a single query using commas between value sets.",
            syntax: "INSERT INTO table_name (column1, column2, ...) VALUES (value1a, value2a, ...), (value1b, value2b, ...);",
            example: "INSERT INTO Students (StudentID, Name, Age, Class) VALUES (3, 'Zain', 21, '10-C'), (4, 'Hina', 18, '10-A');"
          },
          {
            section: "Handling NULL Values",
            description: "You can insert NULL values if a column allows it (i.e., not defined as NOT NULL).",
            syntax: "INSERT INTO Students (StudentID, Name, Age, Class) VALUES (5, 'Ahsan', NULL, '10-B');",
            note: "Do not include quotes around NULL — it is a keyword, not text."
          },
          {
            section: "Best Practices for INSERT",
            description: "Here are some good practices to follow while inserting data:",
            points: [
              "Always use proper data types matching column definitions.",
              "Use single quotes for string values.",
              "Avoid inserting duplicate values in PRIMARY KEY or UNIQUE columns.",
              "If inserting many rows, prefer batch insert for better performance.",
              "Use NULL only where appropriate and supported."
            ]
          },
          {
            section: "Verifying Inserted Data",
            description: "You can check if data was successfully inserted using the SELECT command.",
            syntax: "SELECT * FROM table_name;",
            example: "SELECT * FROM Students;"
          },
          {
            section: "Conclusion",
            description: "The INSERT INTO command is essential for adding new data into your tables. With correct syntax and practices, you can efficiently populate your database with accurate and structured information."
          }
        ]
      },

      {
        id: 4,
        title: "Lab 4: Basic Queries",
        description: "Retrieving data using SELECT, applying conditions with WHERE, and sorting with ORDER BY in MySQL.",
        dueDate: "2025-07-10",
        // files: ['https://drive.google.com/your-lab4-notes-url'],
        content: [
          {
            section: "What is SELECT?",
            description: "The SELECT command is used to retrieve data from one or more tables in a database. It's one of the most commonly used SQL commands.",
            syntax: "SELECT column1, column2 FROM table_name;",
            example: "SELECT Name, Age FROM Students;"
          },
          {
            section: "Selecting All Columns",
            description: "Use * (asterisk) to select all columns from a table.",
            syntax: "SELECT * FROM table_name;",
            example: "SELECT * FROM Students;"
          },
          {
            section: "Using WHERE Clause",
            description: "The WHERE clause is used to filter records that match a specific condition.",
            syntax: "SELECT column1, column2 FROM table_name WHERE condition;",
            example: "SELECT * FROM Students WHERE Age > 18;",
            note: "Use comparison operators like =, >, <, >=, <=, <> and logical operators like AND, OR, NOT."
          },
          {
            section: "Using AND / OR in WHERE",
            description: "Use AND to apply multiple conditions that must all be true. Use OR when any one condition being true is enough.",
            syntax: "SELECT * FROM Students WHERE Age > 18 AND Class = '10-A';",
            example: "SELECT * FROM Students WHERE Class = '10-A' OR Class = '10-B';"
          },
          {
            section: "Using ORDER BY",
            description: "ORDER BY is used to sort the results by one or more columns. You can sort in ascending (ASC) or descending (DESC) order.",
            syntax: "SELECT * FROM table_name ORDER BY column_name ASC/DESC;",
            example: "SELECT * FROM Students ORDER BY Age DESC;"
          },
          {
            section: "Using SELECT with LIMIT",
            description: "LIMIT is used to restrict the number of records returned by a query.",
            syntax: "SELECT * FROM table_name LIMIT number;",
            example: "SELECT * FROM Students LIMIT 5;"
          },
          {
            section: "Common Query Examples",
            description: "Here are some commonly used queries for basic data retrieval.",
            commands: [
              { command: "SELECT specific columns", example: "SELECT Name, Class FROM Students;" },
              { command: "SELECT with condition", example: "SELECT * FROM Students WHERE Class = '10-A';" },
              { command: "SELECT with sorting", example: "SELECT * FROM Students ORDER BY Name ASC;" },
              { command: "SELECT with limit", example: "SELECT * FROM Students LIMIT 3;" },
              { command: "SELECT with multiple conditions", example: "SELECT * FROM Students WHERE Age > 18 AND Class = '10-A';" }
            ]
          },
          {
            section: "Conclusion",
            description: "Basic queries are used to retrieve and view specific data from a database. Using SELECT with WHERE and ORDER BY gives you powerful control over what data you get and how it's presented."
          }
        ]
      },

      {
        "id": 5,
        "title": "Lab 5: Filtering & Sorting Data",
        "description": "Applying filters using AND, OR, BETWEEN, LIKE, and IN clauses in MySQL to retrieve specific data subsets with clear explanations and examples.",
        "dueDate": "2025-07-15",
        "content": [
          {
            "section": "Using AND and OR",
            "description": "AND and OR are logical operators used in WHERE clauses to filter data based on multiple conditions. \n- Use AND when all conditions must be true.\n- Use OR when at least one condition must be true.",
            "syntax": "SELECT * FROM table_name WHERE condition1 AND/OR condition2;",
            "example": "SELECT * FROM Students WHERE Age > 18 AND Class = '10-A';",
            "explanation": "This query returns students who are older than 18 AND belong to class '10-A'. Both conditions must be met for a row to be included."
          },
          {
            "section": "Using BETWEEN",
            "description": "BETWEEN is used to filter data within a specific inclusive range, useful for numeric or date ranges.",
            "syntax": "SELECT * FROM table_name WHERE column BETWEEN value1 AND value2;",
            "example": "SELECT * FROM Students WHERE Age BETWEEN 18 AND 21;",
            "explanation": "This query selects all students whose age is between 18 and 21, including both 18 and 21."
          },
          {
            "section": "Using LIKE",
            "description": "LIKE is used to search for patterns within text columns, helpful for flexible string matching.",
            "syntax": "SELECT * FROM table_name WHERE column LIKE 'pattern';",
            "example": "SELECT * FROM Students WHERE Name LIKE 'A%';",
            "note": "'%' matches any sequence of zero or more characters, while '_' matches exactly one character.",
            "explanation": "This query finds students whose names start with the letter 'A'."
          },
          {
            "section": "Using IN",
            "description": "IN clause allows matching a column’s value against a list of specified values, simplifying multiple OR conditions.",
            "syntax": "SELECT * FROM table_name WHERE column IN (value1, value2, ...);",
            "example": "SELECT * FROM Students WHERE Class IN ('10-A', '10-C');",
            "explanation": "This query returns students who belong either to class '10-A' or '10-C'."
          },
          {
            "section": "Combining Filters",
            "description": "You can combine multiple filtering conditions using AND, OR, BETWEEN, LIKE, and IN to create complex and precise queries.",
            "example": "SELECT * FROM Students WHERE Age BETWEEN 18 AND 20 AND Class IN ('10-A', '10-B');",
            "explanation": "This query selects students aged between 18 and 20 who are in class '10-A' or '10-B'. Both the age range and class condition must be met."
          },
          {
            "section": "Sorting Data",
            "description": "Sorting data helps to organize query results in ascending or descending order based on one or more columns.",
            "syntax": "SELECT * FROM table_name ORDER BY column_name ASC|DESC;",
            "example": "SELECT * FROM Students ORDER BY Age DESC;",
            "explanation": "This query returns all students sorted by Age in descending order (oldest first). Use ASC for ascending order (youngest first)."
          },
          {
            "section": "Combining Filtering and Sorting",
            "description": "Filtering and sorting are often combined to retrieve specific data subsets and present them in a meaningful order.",
            "example": "SELECT * FROM Students WHERE Class = '10-A' ORDER BY Name ASC;",
            "explanation": "This query fetches students in class '10-A' and sorts them alphabetically by their names."
          },
          {
            "section": "Conclusion",
            "description": "Filtering allows extracting only relevant data by applying conditions, while sorting helps organize the results. Mastering these clauses enables writing powerful and efficient SQL queries."
          }
        ]
      },
      
      {
        "id": 6,
        "title": "Lab 6: Aggregate Functions",
        "description": "Using functions like SUM, COUNT, AVG, MIN, and MAX to perform calculations on data in detail with clear explanations and examples.",
        "dueDate": "2025-07-20",
        "content": [
          {
            "section": "What are Aggregate Functions?",
            "description": "Aggregate functions in SQL perform calculations on a set of values and return a single summarized value. These functions are very important for data analysis and reporting.",
            "examples": [
              "SUM: Adds numerical values to get the total.",
              "COUNT: Counts rows or non-null values.",
              "AVG: Calculates the average or mean value.",
              "MIN: Finds the smallest value.",
              "MAX: Finds the largest value."
            ]
          },
          {
            "section": "SUM Function",
            "description": "The SUM function adds up the values in a numeric column and returns the total sum.",
            "syntax": "SELECT SUM(column_name) FROM table_name;",
            "example": "SELECT SUM(Salary) FROM Employees;",
            "explanation": "This query adds all values in the Salary column of the Employees table and returns the total salary."
          },
          {
            "section": "COUNT Function",
            "description": "The COUNT function counts rows or counts non-null values in a specific column.",
            "syntax": "SELECT COUNT(column_name) FROM table_name;",
            "example": "SELECT COUNT(*) FROM Students WHERE Class = '10-A';",
            "note": "COUNT(*) counts all rows regardless of NULLs, while COUNT(column_name) counts only non-null values."
          },
          {
            "section": "AVG Function",
            "description": "The AVG function calculates the average (mean) value of a numeric column.",
            "syntax": "SELECT AVG(column_name) FROM table_name;",
            "example": "SELECT AVG(Age) FROM Students;",
            "explanation": "This query calculates the average age from the Age column in the Students table."
          },
          {
            "section": "MIN and MAX Functions",
            "description": "MIN finds the smallest value and MAX finds the largest value in a column.",
            "syntax": "SELECT MIN(column_name), MAX(column_name) FROM table_name;",
            "example": "SELECT MIN(Age), MAX(Age) FROM Students;",
            "explanation": "This query finds the minimum and maximum ages of students."
          },
          {
            "section": "Using Aggregate Functions with WHERE",
            "description": "Aggregate functions can be used with WHERE clause to perform calculations on filtered data.",
            "example": "SELECT COUNT(*) FROM Students WHERE Age > 18;",
            "explanation": "This query counts the number of students whose age is greater than 18."
          },
          {
            "section": "Conclusion",
            "description": "Aggregate functions help summarize data and provide useful insights. They make queries powerful and data analysis easier."
          }
        ]
      },

      {
        "id": 7,
        "title": "Lab 7: Grouping Data",
        "description": "Analyzing grouped data using GROUP BY to aggregate results and filtering grouped data using HAVING clause.",
        "dueDate": "2025-07-25",
        "content": [
          {
            "section": "What is GROUP BY?",
            "description": "GROUP BY is an SQL clause used to group rows that have the same values in specified columns into summary rows, like totals or averages. It is often used with aggregate functions (SUM, COUNT, AVG, MIN, MAX).",
            "syntax": "SELECT column1, aggregate_function(column2) FROM table_name GROUP BY column1;",
            "example": "SELECT Class, COUNT(*) FROM Students GROUP BY Class;",
            "explanation": "This query groups students by their class and counts the number of students in each class."
          },
          {
            "section": "Why use GROUP BY?",
            "description": "When you want to summarize data based on categories, like counting number of items in each category or calculating averages per group, GROUP BY helps to organize the results effectively.",
            "examples": [
              "Total sales per product",
              "Average salary per department",
              "Number of students per class"
            ]
          },
          {
            "section": "Using Aggregate Functions with GROUP BY",
            "description": "Aggregate functions are applied to each group created by GROUP BY. For example, SUM will add values within each group, COUNT will count rows per group, and AVG calculates average per group.",
            "example": "SELECT Department, AVG(Salary) FROM Employees GROUP BY Department;",
            "explanation": "This returns average salary for each department separately."
          },
          {
            "section": "HAVING Clause",
            "description": "HAVING is used to filter groups after aggregation. Unlike WHERE, which filters rows before grouping, HAVING filters groups based on aggregate function conditions.",
            "syntax": "SELECT column1, aggregate_function(column2) FROM table_name GROUP BY column1 HAVING aggregate_function(column2) condition;",
            "example": "SELECT Class, COUNT(*) FROM Students GROUP BY Class HAVING COUNT(*) > 10;",
            "explanation": "This query groups students by class and only returns classes that have more than 10 students."
          },
          {
            "section": "Difference between WHERE and HAVING",
            "description": "WHERE filters individual rows before grouping, while HAVING filters groups after grouping. If you want to filter based on aggregate results, use HAVING.",
            "example": [
              {
                "query": "SELECT Class, COUNT(*) FROM Students WHERE Age > 15 GROUP BY Class;",
                "explanation": "Filters students older than 15 first, then groups by class."
              },
              {
                "query": "SELECT Class, COUNT(*) FROM Students GROUP BY Class HAVING COUNT(*) > 5;",
                "explanation": "Groups all students by class first, then returns only classes with more than 5 students."
              }
            ]
          },
          {
            "section": "Multiple Columns in GROUP BY",
            "description": "You can group data by more than one column to create more specific groups.",
            "example": "SELECT Department, Gender, AVG(Salary) FROM Employees GROUP BY Department, Gender;",
            "explanation": "This groups employees by both department and gender and calculates average salary for each subgroup."
          },
          {
            "section": "Ordering Grouped Results",
            "description": "You can sort grouped results using ORDER BY clause, either by group column or aggregate results.",
            "example": "SELECT Class, COUNT(*) FROM Students GROUP BY Class ORDER BY COUNT(*) DESC;",
            "explanation": "This query shows classes ordered by number of students from highest to lowest."
          },
          {
            "section": "Conclusion",
            "description": "GROUP BY combined with aggregate functions allows analyzing data by categories or groups. HAVING lets you filter these groups based on aggregate conditions, making your SQL queries powerful for data summarization and insight generation."
          }
        ]
      }
      
      
      
      
      
  ];
  
  