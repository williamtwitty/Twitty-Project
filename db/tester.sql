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
	
('test@cool.com', 'test@cool.com', 'https://s.gravatar.com/avatar/86915e64f9c0f5dc88de2fd0eba3fbf2?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png', '59cc15f33e16991fcdcc0e92', 'QBAO45NH8QA99OSZARBVNKX6U5TN1DVJTFRTGZSDN7ZKWCBU43'),
	('testing@cool.com', 'testing@cool.com', 'https://s.gravatar.com/avatar/494dd81bbd69f7fa428c45bd634503c4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png', '59cc100e177d0e271c4eacd7', 'UNH92VG9V4ZXMT62ZZTNVS8VJ54BW9ER6QI463R2ZVJX7KQ1S1'),
	('will@twitty.com',	'will@twitty.com',	'https://s.gravatar.com/avatar/fb68e0e181c3146363f2b53cd9c87428?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwi.png', '59cc209207e4bc45e4e1313c', 'TPYYWFBJJEY0HB2P17CSV4T2KLM4XT8UZ7VO1H3EIQSOSNES23');


drop table if exists visits;

create table if not exists visits (
id serial primary key,
trackerusers_id integer references trackerusers(id),
visitTime timestamp default null,
endVisit timestamp default null
);

select * from buttonclicks

create table if not exists buttonclicks (
id serial primary key,
trackerusers_id integer references trackerusers(id),
clickTime timestamp default null,
buttonType text,
buttonColor text
);


-- insert into visits (auth_id, api_key, visitTime, endVisit)
-- values 
-- ('something1', 'something1', current_timestamp, null),
-- ('something2', 'something2', current_timestamp, null),
-- ('something3', 'something3', current_timestamp, null),
-- ('something4', 'something4', current_timestamp, null),
-- ('something5', 'something5', current_timestamp, null),
-- ('something6', 'something6', current_timestamp, null),
-- ('something7', 'something7', current_timestamp, null),
-- ('something8', 'something8', current_timestamp, null),
-- ('something9', 'something9', current_timestamp, null),
-- ('something10', 'something10', current_timestamp, null)
-- returning *;


