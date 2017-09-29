select trackerusers.user_name, count(visits.id)
from trackerusers
left outer join visits
on trackerusers.id = visits.trackerusers_id
group by trackerusers.user_name, trackerusers.id
order by count(visits.id) desc;