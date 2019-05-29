const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // Get all images
    let queryText = `SELECT * FROM image;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('Error in image get route', error);
            res.sendStatus(500);
        });
});

module.exports = router;