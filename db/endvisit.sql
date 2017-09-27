update visits
set endVisit = current_timestamp
where id = $1