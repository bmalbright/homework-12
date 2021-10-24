DROP DATABASE IF EXISTS whac_employees_db;
CREATE DATABASE whac_employees_db;

USE whac_employees_db;

CREATE TABLE departments (
    id INT INTENTITY(1, 1) PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT INDENTITY(101, 1) PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    wage INT NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT INDENTITY(201, 1) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    roles_id INT,
    manager_id INT,
    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);