select ip_address, count(*)
from visits 
where trackerusers_id = $1
group by ip_address
HAVING count(*) = 1;