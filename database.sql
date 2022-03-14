CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "tasks" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "description" VARCHAR (250) NOT NULL,
    "status" BOOLEAN DEFAULT FALSE,
    "user_id" INT REFERENCES "users"
);
