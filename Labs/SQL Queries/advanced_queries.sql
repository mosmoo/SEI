-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
SELECT * FROM books
  JOIN 
authors
  ON
authors.id = books.author_id
  WHERE
name = 'George R.R. Martin';

/* name LIKE '%R.%'; */


-- Find all fields (book and author related) for all books written by Milan Kundera.
SELECT * FROM books
  JOIN 
authors
  ON
authors.id = books.author_id
  WHERE
name
  ILIKE
'%kunde%';

-- Find all books written by an author from China or the UK.
SELECT * FROM books
  JOIN 
authors
  ON
authors.id = books.author_id
  WHERE
nationality = 'China'
  OR
nationality ILIKE '%ingdom';

-- Find out how many books Albert Camus wrote.
SELECT COUNT(*) FROM books JOIN authors
ON authors.id = books.author_id
WHERE name = 'Albert Camus';

-- Find out how many books were written by US authors.
SELECT COUNT(*) FROM books JOIN authors
ON authors.id = books.author_id
WHERE nationality LIKE '%erica';

-- Find all books written after 1930 by authors from Argentina.
SELECT * FROM books JOIN authors
ON authors.id = books.author_id
WHERE nationality LIKE '%tina' 
AND publication_date > 1930;

-- Find all books written before 1980 by authors not from the US.
SELECT * FROM books JOIN authors
ON authors.id = books.author_id
WHERE nationality NOT LIKE '%erica' 
AND publication_date < 1980;

-- Find all authors whose names start with 'J'.
SELECT * FROM authors WHERE name LIKE 'J%';

-- Find all books whose titles contain 'the'.
SELECT * FROM books WHERE title ILIKE '%the%';

-- Find all authors who have written books with that start with the letter 'N'.
SELECT DISTINCT authors.name FROM books JOIN authors
ON authors.id = books.author_id
WHERE title LIKE 'N%';