select distinct (date(visittime)) as unique_date, count(*) as amount 
from visits group by unique_date order by unique_date asc