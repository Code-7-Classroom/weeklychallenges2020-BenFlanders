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

SELECT * FROM movies WHERE title LIKE '%s%' ORDER BY release_date;