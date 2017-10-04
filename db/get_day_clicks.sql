SELECT count(*)
FROM buttonclicks
WHERE clicktime >= (now() - '1 day'::INTERVAL) and trackerusers_id = $1;