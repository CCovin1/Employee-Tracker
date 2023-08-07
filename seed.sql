USE employees_db;

INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES 
('Sales Manager', 100000.00, 1),
('Salesperson', 70000.00, 1),
('Software Engineer', 120000.00, 2),
('System Architect', 150000.00, 2),
('Finance Manager', 90000.00, 3),
('Accountant', 80000.00, 3),
('Marketing Director', 130000.00, 4),
('Marketing Associate', 75000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
