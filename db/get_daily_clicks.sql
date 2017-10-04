select distinct (date(clicktime)) as unique_date, count(*) as amount 
from buttonclicks group by unique_date order by unique_date asc