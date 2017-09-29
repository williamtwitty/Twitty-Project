SELECT count(*)
FROM visits
WHERE visittime >= (now() - '7 day'::INTERVAL) and trackerusers_id = $1  ;