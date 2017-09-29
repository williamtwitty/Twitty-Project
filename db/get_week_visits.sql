SELECT count(*)
FROM visits
WHERE visittime >= (now() - '7 day'::INTERVAL);