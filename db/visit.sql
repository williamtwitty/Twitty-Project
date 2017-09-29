insert into visits (trackerusers_id, visitTime)
values 
($1, current_timestamp)
returning *;