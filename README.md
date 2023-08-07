# Employee Management System
The Employee Management System is a command-line application that allows users to manage departments, roles, and employees within an organization. This application is built using Node.js, MySQL, and various npm packages such as inquirer, mysql2/promise, console.table, and figlet.

## Features
View Departments, Roles, and Employees: Users can view lists of departments, roles, and employees in a tabular format using the console.table package.

Add Departments, Roles, and Employees: Users can add new departments, roles, and employees to the database.

Update Employee Roles: Users can update an employee's role within the organization.

Exit the Application: Users can exit the application gracefully.

## Getting Started
To run the Employee Management System, follow these steps:

Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/employee-management-system.git
Navigate to the project directory:

bash
Copy code
cd employee-management-system
Install the required npm packages:

bash
Copy code
npm install
Set up your MySQL database:

Create a .env file in the project root and add your database configuration:

env
Copy code
DB_HOST=your_database_host
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=employees_db
Import the database schema and sample data by running the SQL scripts in your MySQL client or workbench. You can find these scripts in the provided code.

Start the application:

bash
Copy code
node app.js
Follow the prompts to interact with the Employee Management System.

## Usage
Upon launching the application, you will be presented with a menu of options:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role
Exit
Choose the desired action by selecting the corresponding option and following the prompts. You can navigate through the different features of the application to manage departments, roles, and employees efficiently.

## Credits
This Employee Management System was created by [Your Name]. It utilizes the inquirer, mysql2/promise, console.table, and figlet npm packages.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

