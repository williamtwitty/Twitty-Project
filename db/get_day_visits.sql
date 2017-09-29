SELECT count(*)
FROM visits
WHERE visittime >= (now() - '1 day'::INTERVAL) and trackerusers_id = $1;