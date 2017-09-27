drop table if exists visits;

create table if not exists visits (
id serial primary key,
auth_id text,
api_key text,
visitTime timestamp default null,
endVisit: timestamp default null
);



insert into visits (auth_id, api_key, visitTime, endVisit)
values 
('something1', 'something1', current_timestamp, null),
('something2', 'something2', current_timestamp, null),
('something3', 'something3', current_timestamp, null),
('something4', 'something4', current_timestamp, null),
('something5', 'something5', current_timestamp, null),
('something6', 'something6', current_timestamp, null),
('something7', 'something7', current_timestamp, null),
('something8', 'something8', current_timestamp, null),
('something9', 'something9', current_timestamp, null),
('something10', 'something10', current_timestamp, null)
returning *;


drop table if exists trackerusers;

create table if not exists trackerusers (
    id serial primary key,
    user_name varchar(180),
    email varchar(180),
    img text,
    auth_id text,
    api_key text
);

insert into trackerusers (user_name, email, img, auth_id, api_key)
values 
('something1', 'something1', 'something1', 'something1', 'something1'),
('something2', 'something2', 'something2', 'something2', 'something2'),
('something3', 'something3', 'something3', 'something3', 'something3'),
('something4', 'something4', 'something4', 'something4', 'something4'),
('something5', 'something5', 'something5', 'something5', 'something5'),
('something6', 'something6', 'something6', 'something6', 'something6'),
('something7', 'something7', 'something7', 'something7', 'something7'),
('something8', 'something8', 'something8', 'something8', 'something8');
