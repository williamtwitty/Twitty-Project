select distinct (date(visittime)) as unique_date, count(*) as amount 
from visits
where trackerusers_id = $1
 group by unique_date order by amount desc
 limit 1
 ;