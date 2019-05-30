const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    // Get all images
    let queryText = `SELECT * FROM vehicle;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('Error in vehicle get route', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    if(req.isAuthenticated()) {
        let car = req.body;
        let queryText = `INSERT INTO vehicle ("year", "make", "model", "description", "price", "city", "state", "zip", "user_id")
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
        pool.query(queryText, [car.year, car.make, car.model, car.description, car.price, car.city, car.state, car.zip, req.user.id])
        .then(() => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('Error in vehicle POST route', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
})

router.get('/owner', (req, res) => {
    let queryText = `SELECT vehicle.make, vehicle.model FROM vehicle
                    JOIN "user" ON vehicle.user_id = "user".id
                    WHERE "user".id = $1;`;
    pool.query(queryText, [req.user.id])
        .then((results) => {
            console.log('results.row:', results.rows);
            res.send(results.rows)
        }).catch(error => {
            console.log('error in owner car GET:', error);
            res.sendStatus(500);
        });
});

module.exports = router;