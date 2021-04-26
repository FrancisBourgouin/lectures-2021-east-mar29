-- SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id;

-- SELECT * FROM jokes FULL JOIN authors ON authors.id = jokes.author_id;

-- SELECT jokes.question, jokes.answer, authors.name FROM jokes JOIN authors ON authors.id = jokes.author_id

-- SELECT 
--   jokes.question, jokes.answer, authors.name 
-- FROM 
--   jokes 
-- JOIN 
--   authors ON authors.id = jokes.author_id
-- WHERE
--   jokes.question ILIKE 'knock%'

-- SELECT 
--   jokes.question, jokes.answer, authors.name 
-- FROM 
--   jokes 
-- JOIN 
--   authors ON authors.id = jokes.author_id
-- WHERE
--   LOWER(jokes.question) LIKE 'knock knock%'


-- SELECT 
--   jokes.question, jokes.answer, authors.name, jokes.rating
-- FROM 
--   jokes 
-- JOIN 
--   authors ON authors.id = jokes.author_id
-- WHERE
--   jokes.rating > 3

-- SELECT 
--   jokes.question, jokes.answer, authors.name, jokes.rating
-- FROM 
--   jokes 
-- JOIN 
--   authors ON authors.id = jokes.author_id
-- WHERE
--   jokes.rating > 3
-- ORDER BY
--   jokes.question DESC


-- SELECT 
--   authors.id, authors.name, COUNT(*)
-- FROM 
--   authors 
-- JOIN 
--   jokes ON authors.id = jokes.author_id
-- GROUP BY
--   authors.id
-- ORDER BY 
--   authors.name ASC
-- LIMIT 2

-- SELECT 
--   authors.id, authors.name AS author_name, COUNT(*) AS amount_of_jokes
-- FROM 
--   authors 
-- JOIN 
--   jokes ON authors.id = jokes.author_id
-- GROUP BY
--   authors.id
-- ORDER BY 
--   authors.name ASC
-- LIMIT 2




SELECT
  *
FROM
  jokes
WHERE
  author_id IN (SELECT id FROM authors WHERE name LIKE 'G%') -- Finds the funny people
AND
  jokes.id > 4 -- I don't want old jokes
AND
  author_id IN (SELECT id FROM authors WHERE name LIKE 'G%')
AND
  author_id IN (SELECT id FROM authors WHERE name LIKE 'G%')
AND
  author_id IN (SELECT id FROM authors WHERE name LIKE 'G%')
AND
  author_id IN (SELECT id FROM authors WHERE name LIKE 'G%')
AND
  author_id IN (SELECT id FROM authors WHERE name LIKE 'G%')
AND
  author_id IN (SELECT id FROM authors WHERE name LIKE 'G%')