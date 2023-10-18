CREATE DATABASE linkr_db;
CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    phone VARCHAR(20) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP,
    picture TEXT
);

CREATE TABLE topics (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE interaction_types (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE posts (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    attachments TEXT[], 
    user_id INT NOT NULL REFERENCES users(id),
    hashtags INT[] REFERENCES topics(id),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP
);

CREATE TABLE post_interactions (
    id SERIAL NOT NULL PRIMARY KEY,
    content TEXT,
    post_id INT NOT NULL REFERENCES posts(id),
    user_id INT NOT NULL REFERENCES users(id),
    interaction_type_id INT NOT NULL REFERENCES interaction_type(id),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP
);