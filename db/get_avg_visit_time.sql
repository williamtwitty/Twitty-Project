select avg(age(endvisit, visittime)) as visits_age
from visits
where trackerusers_id = $1;