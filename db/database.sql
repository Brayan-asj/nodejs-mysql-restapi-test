CREATE DATABASE IF NOT EXISTS ujeddb;

USE ujeddb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT, 
    name VARCHAR(45) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
    (1, "John Doe", 50000),
    (2, "Jane Doe", 60000),
    (3, "Jimmy Smith", 70000);