insert into trackerusers (user_name, email, img, auth_id, api_key)
values 
($1, $2, $3, $4, $5)
returning *;