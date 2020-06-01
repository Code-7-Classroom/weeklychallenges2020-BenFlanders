DROP DATABASE IF EXISTS guidedInquiry;
CREATE DATABASE guidedInquiry;
USE guidedInquiry;

CREATE TABLE movies(
	title VARCHAR(255), 
    release_date DATE, 
    rating ENUM('G','PG','PG13','R','MA')
);

INSERT INTO movies(title, release_date, rating)
VALUES("The Shining", "1980-05-23", "R"),
("Inception", "2010-07-13", "PG13"),
("Titanic", "1997-12-19", "PG13"),
("Jumanji", "1995-12-15", "PG"),
("The Goonies", "1985-06-07", "PG"),
("Rocky", "1976-11-21", "PG"),
("Alien", "1979-05-25", "R"),
("The Other Guys", "2010-08-05", "PG13"),
("John Wick", "2014-10-24", "R"),
("Split", "2017-01-19", "PG13");

-- Adds First and Last name Column
ALTER TABLE movies
ADD (first_name VARCHAR(255), last_name VARCHAR(255));

-- Updates movies Table with First and Last Name data
UPDATE movies
SET first_name = "Stanley", last_name = "Kubrick"
WHERE title = "The Shining";

UPDATE movies
SET first_name = "Christopher", last_name = "Nolan"
WHERE title = "Inception";

UPDATE movies
SET first_name = "James", last_name = "Cameron"
WHERE title = "Titanic";

UPDATE movies
SET first_name = "Joe", last_name = "Johnston"
WHERE title = "Jumanji";

UPDATE movies
SET first_name = "Richard", last_name = "Donner"
WHERE title = "The Goonies";

UPDATE movies
SET first_name = "John", last_name = "Avildsen"
WHERE title = "Rocky";

UPDATE movies
SET first_name = "Ridley", last_name = "Scott"
WHERE title = "Alien";

UPDATE movies
SET first_name = "Adam", last_name = "McKay"
WHERE title = "The Other Guys";

UPDATE movies
SET first_name = "Chad", last_name = "Stahelski"
WHERE title = "John Wick";

UPDATE movies
SET first_name = "M. Knight", last_name = "Shyamalan"
WHERE title = "Split";

-- Adds first and last name into single data column
SELECT CONCAT(first_name, ' ', last_name) AS 'full_name' FROM movies;

-- Puts table data in alphabetical order by last name
SELECT * FROM movies ORDER BY last_name;

-- Deletes Movies where the director's last name ends with character between R and Z
DELETE FROM movies WHERE last_name REGEXP '[R-Z]$';
SELECT * FROM movies;

-- Displays first three rows of movies table
SELECT * FROM movies LIMIT 3;