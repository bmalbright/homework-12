
INSERT INTO departments (department_name)
    VALUES ("operations"),
           ("programs");

INSERT INTO roles (title, wage, department_id)
    VALUES  ("manager", 30, 1),
            ("lifeguard", 15, 1),
            ("maintenance", 20, 1),
            ("frontdesk", 10, 1),
            ("accounting", 50, 1),
            ("coach", 40, 2),
            ("instructor", 25, 2);


INSERT INTO employees (first_name, last_name, roles_id, manager_id)
    VALUES ("Margaret", "Beck", 1, NULL),
           ("Andy", "Dutton", 2, 1),        
           ("Thomas", "Richisin", 3, 1),
           ("John", "O'Neal", 4, 1),     
           ("Liz", "Dotterer", 5, 1),
           ("Jimmy", "Bynum", 6, NULL),
           ("Trent", "Gentry", 7, NULL),
           ("Drew", "Gomillion", 2, 1),     
           ("Ian", "Crocker", 6, NULL);




