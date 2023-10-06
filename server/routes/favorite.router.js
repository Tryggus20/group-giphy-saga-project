const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM favorite ORDER BY id ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  const newGif = req.body;
  const queryText = `INSERT INTO "favorite" ("url")
                    VALUES ($1)`;
  const queryValues = [newGif.url];
  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error completing adding gif to favorite query", err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
// req.body should contain a category_id to add to this favorite image
router.put(`/:id`, (req, res) => {
  const updatedGif = req.body;
  const queryText = `UPDATE "favorite"
SET "category_id" = $1
  WHERE id=$2;`;
  const queryValues = [updatedGif.category_id, updatedGif.id];
  pool
    .query(queryText, queryValues)
    .then(() => {
      console.log("------------------",queryText, queryValues, updatedGif, req.body);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error UPDATING category in favorites", err);
      res.sendStatus(500);
    });
});

// delete a favorite:

//prob need to change from req.params.id??? (line62)
// router.delete(`/:id`, (req, res) => {
//   const queryText = 'DELETE FROM "favorite" WHERE id=$1';
//   pool.query(queryText, [req.params.id]).then(() => { res.sendStatus(200); })
//   .then(() => { res.sendStatus(200); })
//   .catch((err) => {
//     console.log('Error DELETING gif', err);
//     res.sendStatus(500);
//   });
// });
// return all favorite images
router.get("/funny", (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM "favorite" WHERE "category_id" = '1' ORDER BY "id" ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// return all favorite images
router.get("/cohort", (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM "favorite" WHERE "category_id" = '2' ORDER BY "id" ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// return all favorite images
router.get("/cartoon", (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM "favorite" WHERE "category_id" = '3' ORDER BY "id" ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// return all favorite images
router.get("/nsfw", (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM "favorite" WHERE "category_id" = '4' ORDER BY "id" ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// return all favorite images
router.get("/meme", (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM "favorite" WHERE "category_id" = '5' ORDER BY "id" ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
