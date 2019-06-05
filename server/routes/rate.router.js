const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Get average ratings for vehicle
router.get('/', (req, res) => {
    let queryText = `SELECT AVG("rating".rates), rating.vehicle_id FROM "rating"
                    GROUP BY rating.vehicle_id;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('Error in rate get route', error);
            res.sendStatus(500);
        });
});

// Get comments for vehicle
router.get('/comments', (req, res) => {
    let queryText = `SELECT * FROM image;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('Error in comment get route', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        let rate = req.body;
        console.log('vehicle id from rate post route', rate.vehicle_id);

        let queryText = `INSERT INTO "rating" ("rates", "comment", "user_id", "vehicle_id")
                        VALUES ($1, $2, $3, $4);`;
        pool.query(queryText, [rate.rates, rate.comment, req.user.id, rate.vehicle_id])
            .then(result => {
                res.sendStatus(201)
            }).catch(error => {
                console.log('Error in POST rate route', error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})

module.exports = router;