
INSERT INTO departments (department_name)
    VALUES ("operations"),
           ("programs");

INSERT INTO roles (title, wage, department_id)
    VALUES  ("operations manager", 30, 1),
            ("lifeguard", 15, 1),
            ("maintenance", 20, 1),
            ("frontdesk", 10, 1),
            ("accounting", 50, 1),
            ("coach", 40, 2),
            ("instructor", 25, 2),
            ("program manager", 30, 2);


INSERT INTO employees (first_name, last_name, roles_id)
    VALUES ("Margaret", "Beck", 1),
           ("Andy", "Dutton", 2),        
           ("Thomas", "Richisin", 3),
           ("John", "O'Neal", 4),     
           ("Liz", "Dotterer", 5),
           ("Jimmy", "Bynum", 8),
           ("Trent", "Gentry", 7),
           ("Drew", "Gomillion", 2),     
           ("Ian", "Crocker", 6);


UPDATE employees
SET manager_id = 1
WHERE roles_id IN (2, 3, 4, 5);


UPDATE employees
SET manager_id = 8
WHERE roles_id IN (6, 7);





