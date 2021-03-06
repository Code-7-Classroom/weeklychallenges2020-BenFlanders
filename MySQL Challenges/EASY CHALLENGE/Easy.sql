DROP DATABASE IF EXISTS guidedInquiry;
CREATE DATABASE guidedInquiry;
USE guidedInquiry;

-- Creates the books table
CREATE TABLE books(
	title VARCHAR(255),
    publish_date DATE,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

INSERT INTO books(title, publish_date, first_name, last_name)
VALUES("Harry Potter and the Sorcerer's Stone", "1998-09-01", "J.K.", "Rowling"),
("Percy Jackson & the Olympians: The Lightning Theif", "2005-06-28", "Rick", "Riordan"),
("Old Yeller", "1942-01-01", "Fred", "Gipson"),
("Start with why", "2009-01-01", "Simon", "Sinek"),
("Where the Wild things are", "1963-04-09", "Maurice", "Sendak");

-- Inserts two books into the books table
INSERT INTO books(title, publish_date, first_name, last_name)
VALUES("Where the red fern grows", "1961-01-01", "Wilson", "Rawls"),
("Secret Garden", "1911-01-01", "Frances", "Burnett");

-- Delete the oldest book by publish date
DELETE FROM books ORDER BY publish_date LIMIT 1;

SELECT * FROM books;

-- Counts the number of Books in the table by book title
SELECT COUNT(title) FROM books;