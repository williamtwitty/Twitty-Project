SELECT count(*)
FROM visits
WHERE visittime >= (now() - '1 day'::INTERVAL);