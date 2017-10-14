select count(*) from visits 
where trackerusers_id = $1 and endvisit is null;