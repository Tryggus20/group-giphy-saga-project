CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key
CREATE TABLE "favorite" (
"id" SERIAL PRIMARY KEY,
"url" VARCHAR (250),
"category_id" INT REFERENCES "category");

INSERT INTO "favorite" ("url", "category_id")
VALUES ('https://giphy.com/embed/H6rdaZD2ghEqQaTtLL', 2);


-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
