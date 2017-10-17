select state, city, latitude, longitude from visits 
where trackerusers_id = $1 and endvisit is null;