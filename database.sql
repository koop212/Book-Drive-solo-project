
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(80) UNIQUE NOT NULL,
	"password" VARCHAR(1000) NOT NULL,
	"first_name" VARCHAR(80) NOT NULL,
	"last_name" VARCHAR(80) NOT NULL,
	"email" VARCHAR(100) NOT NULL
);

CREATE TABLE "vehicle" (
	"id" SERIAL PRIMARY KEY,
	"year" INT NOT NULL,
	"make" VARCHAR(80) NOT NULL,
	"model" VARCHAR(80) NOT NULL,
	"status" BOOLEAN,
	"ride_count" INT,
	"description" VARCHAR(2000) NOT NULL,
	"price" NUMERIC(6, 2),
	"city" VARCHAR(80) NOT NULL,
	"state" VARCHAR(80) NOT NULL,
	"zip" VARCHAR(15) NOT NULL,
	"user_id" INT REFERENCES "user"
);

CREATE TABLE "image" (
	"id" SERIAL PRIMARY KEY,
	"image_url" VARCHAR(1000),
	"vehicle_id" INT REFERENCES "vehicle" ON DELETE CASCADE
);

CREATE TYPE STATUS AS ENUM ('Pending', 'Approved', 'Declined', 'Returned');

CREATE TABLE "order" (
	"id" SERIAL PRIMARY KEY,
	"start_date" DATE,
	"end_date" DATE,
	"user_id" INT REFERENCES "user",
	"vehicle_id" INT REFERENCES "vehicle" ON DELETE CASCADE,
	"status" STATUS DEFAULT 'Pending'
);

CREATE TABLE "rating" (
	"id" SERIAL PRIMARY KEY,
	"rates" INT,
	"comment" VARCHAR(1000),
	"user_id" INT REFERENCES "user",
	"vehicle_id" INT REFERENCES "vehicle" ON DELETE CASCADE
);

CREATE TABLE "features" (
	"id" SERIAL PRIMARY KEY,
	"all_wheel_drive" BOOLEAN,
	"pet_friendly" BOOLEAN,
	"heated_seats" BOOLEAN,
	"convertible" BOOLEAN,
	"sunroof" BOOLEAN,
	"automatic" BOOLEAN,
	"manual" BOOLEAN,
	"electric" BOOLEAN,
	"gas" BOOLEAN,
	"hybrid" BOOLEAN,
	"vehicle_id" INT REFERENCES "vehicle" ON DELETE CASCADE
);