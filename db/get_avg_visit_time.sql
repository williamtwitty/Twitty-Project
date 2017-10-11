
select to_char(avg(age(endvisit, visittime)), 'HH24:MI:SS') as visits_age
from visits
where trackerusers_id = $1;