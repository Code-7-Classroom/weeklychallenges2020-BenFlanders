DROP DATABASE IF EXISTS guidedInquiry;
CREATE DATABASE guidedInquiry;
USE guidedInquiry;

CREATE TABLE cars(
	make VARCHAR(50),
    model VARCHAR(50),
    year INT 
);

INSERT INTO cars(model, make, year)
VALUES ("Mustang", "Ford", 2020),
("Charger", "Dodge", 2020),
("Cybertruck", "Tesla", 2020),
("Corvette", "Chevrolet", 2020),
("Aventador", "Lamborghini", 2020);

-- Add Three Cars to the Cars Table in single query
INSERT INTO cars(model, make, year)
VALUES ("Camry", "Toyota", 2020),
("Accord", "Honda", 2020),
("Civic", "Honda", 2020);

-- Add price and color column
ALTER TABLE cars
ADD (price DECIMAL(10,2), color VARCHAR(50));

-- Update Cars table with new data
UPDATE cars 
SET price = 26670.00, color = "black"
WHERE model = "Mustang";

UPDATE cars 
SET price = 29995.00 , color = "orange"
WHERE model = "Charger";

UPDATE cars 
SET price = 39000.00 , color = "green"
WHERE model = "Cybertruck";

UPDATE cars 
SET price = 58900.00, color = "white"
WHERE model = "Corvette";

UPDATE cars 
SET price = 417826.00, color = "blue"
WHERE model = "Aventador";

UPDATE cars 
SET price = 24425.00, color = "sky blue"
WHERE model = "Camry";

UPDATE cars 
SET price = 24020.00, color = "yellow"
WHERE model = "Accord";

UPDATE cars 
SET price = 19850.00, color = "red"
WHERE model = "Civic";

SELECT * FROM cars;

-- Combine Make and Model into single column
SELECT CONCAT(make, ' ', model) AS 'vehicle' FROM cars;

-- Adds column showing number of cars with matching make to the results
SELECT results.matching_make, cars.make, cars.model, cars.year, cars.price, cars.color FROM cars
INNER JOIN (SELECT make, count(make) AS matching_make FROM cars GROUP BY make) AS results
ON results.make = cars.make;