
INSERT INTO departments (department_name)
    VALUES ("operations"),
           ("programs");

INSERT INTO roles (title, wage, department_id)
    VALUES  ("operations manager", 30, 1),
            ("lifeguard", 15, 1),
            ("maintenance", 20, 1),
            ("frontdesk", 10, 1),
            ("coach", 40, 2),
            ("instructor", 25, 2),
            ("program manager", 30, 2);


INSERT INTO employees (first_name, last_name, roles_id)
    VALUES ("Margaret", "Beck", 1),
           ("Andy", "Dutton", 2),        
           ("Thomas", "Richisin", 3),
           ("John", "O'Neal", 4),     
           ("Jimmy", "Bynum", 7),
           ("Trent", "Gentry", 6),
           ("Drew", "Gomillion", 2),     
           ("Ian", "Crocker", 5);


UPDATE employees
SET manager_id = 1
WHERE roles_id IN (2, 3, 4);


UPDATE employees
SET manager_id = 7
WHERE roles_id IN (5, 6);





