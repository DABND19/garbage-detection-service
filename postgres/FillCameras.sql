CREATE TABLE camera (
    id int not null primary key,
    created_at timestamp not null,
    updated_at timestamp not null,

    lat float not null,
    alt float not null,

    address varchar(512) not null,
    photo_path varchar(2048)
);

CREATE TABLE garbage_log (
    id integer not null serial primary key,
    created_at timestamp not null,
    updated_at timestamp not null,

    camera_id int not null,
    total_containers_count int not null,
    filled_containers_count int not null,

    address varchar(512) not null,
    garbage_containers_data json
);

COPY cameras FROM 'FillCameras.sql' DELIMITER ',' CSV HEADER;