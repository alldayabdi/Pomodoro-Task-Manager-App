const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      console.log('/tasks GET route');
      console.log('is authenticated?', req.isAuthenticated());
      console.log('user', req.user);
      let queryText = `SELECT * FROM "tasks" WHERE user_id = ${req.user.id}`;
      pool.query(queryText).then((result) => {
        res.send(result.rows);
      }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
    } else {
      res.sendStatus(403);
    }
  });

  router.get('/:id', (req, res) => {
    if (req.isAuthenticated()) {
      console.log('This is the req params id', req.params.id);
      console.log('/tasks GET Specific task route');
      console.log('is authenticated?', req.isAuthenticated());
      console.log('user', req.user);
      let queryText = `SELECT * FROM "tasks" WHERE id = ${req.params.id}`;
      pool.query(queryText).then((result) => {
        res.send(result.rows);
      }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
    } else {
      res.sendStatus(403);
    }
  });

  router.post('/',(req,res) => {
    if(req.isAuthenticated()){
        console.log(req.body.description, req.body.name);
        console.log(req.body);
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);
        let queryText = `INSERT INTO "tasks" ("name", "description", "user_id") 
    VALUES ($1, $2, $3);`
        pool.query(queryText,[req.body.name, req.body.description, req.user.id])
        .then(result => res.sendStatus(201))
      .catch(err => res.sendStatus(500));

    }else {
    res.sendStatus(403);
  }

  })

  router.delete('/:id', (req, res) => {
    // endpoint functionality
    let reqId = req.params.id;
    if (req.isAuthenticated()) {
      console.log('/task DELETE route');
      console.log('is authenticated?', req.isAuthenticated());
      console.log('user', req.user);
      let queryText = 'DELETE FROM tasks where id = $1;';
      pool.query(queryText, [reqId])
      .then(result => res.sendStatus(201))
        .catch(err => res.sendStatus(500));
    } else {
      res.sendStatus(403);
    }
  });

  router.put('/:id', (req, res) => {
    let reqId = req.params.id;
    if (req.isAuthenticated()) {
    console.log('/tasks put route', req.body);
    const queryText = `UPDATE "tasks"
  SET "name" =  $1, "description" = $2
  WHERE id = $3;`;
    // endpoint functionality
    const queryValues = [req.body.name, req.body.description, reqId];
    pool.query(queryText, queryValues)
    .then(result => res.sendStatus(201))
    .catch(err => res.sendStatus(500));
    } else {
        res.sendStatus(403)
    }
});



module.exports = router;