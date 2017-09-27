create table if not exists trackerusers (
    id serial primary key,
    user_name varchar(180),
    email varchar(180),
    img text,
    auth_id text,
    api_key text
);