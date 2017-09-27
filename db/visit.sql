insert into visits (auth_id, api_key, visitTime)
values 
($1, $2, current_timestamp)
returning *;