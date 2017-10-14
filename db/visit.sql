insert into visits 
(trackerusers_id, visitTime, country, state, city, zip_code, latitude, longitude, ip_address)
values 
($1, current_timestamp, $2, $3, $4, $5, $6, $7, $8)
returning *;