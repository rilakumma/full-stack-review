insert into users
(auth0_id, name, email, picture)
VALUES
(${auth0_id}, ${name}, ${email}, ${picture})
returning *;