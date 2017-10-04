insert into buttonclicks (trackerusers_id, clicktime)
values 
($1, current_timestamp)
returning *;