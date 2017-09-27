create table if not exists visits (
id serial primary key,
auth_id text,
api_key text,
visitTime timestamp,
endVisit: timestamp default null
)