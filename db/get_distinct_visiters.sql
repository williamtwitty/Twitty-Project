select count(distinct ip_address) from visits
where trackerusers_id = $1;