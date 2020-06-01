DROP DATABASE IF EXISTS guidedInquiry;
CREATE DATABASE guidedInquiry;
USE guidedInquiry;

CREATE TABLE cars(
	make VARCHAR(50),
    model VARCHAR(50),
    year INT 
);

INSERT INTO cars(make, model, year)
VALUES ("Mustang", "Ford", 2020),
("Charger", "Dodge", 2020),
("Cybertruck", "Tesla", 2020);

-- Add Two Cars to the Cars Table
INSERT INTO cars(make, model, year)
VALUES ("Corvette", "Chevrolet", 2020),
("Aventador", "Lamborghini", 2020);

SELECT * FROM cars;