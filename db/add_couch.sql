insert into couches
(user_id ,name, price, image)
VALUES
(${user_id}, ${name}, ${price}, ${image})
returning *;