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



module.exports = router;