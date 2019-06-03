const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.post('/', (req, res) => {
    if(req.isAuthenticated()) {
        let order = req.body;
        console.log('vehicle id from order post route', order.vehicle_id);

        let queryText = `INSERT INTO "order" ("start_date", "end_date", "user_id", "vehicle_id")
                        VALUES ($1, $2, $3, $4);`;
        pool.query(queryText, [order.start_date, order.end_date, req.user.id, order.vehicle_id])
        .then(result => {
            res.sendStatus(201)
        }).catch(error => {
            console.log('Error in POST date route', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
})


router.get('/', (req, res) => {
    let queryText = `SELECT "order".*, vehicle.make, vehicle.model, vehicle.price FROM "order"
                    JOIN vehicle ON "order".vehicle_id = vehicle.id
                    JOIN "user" ON "order".user_id = "user".id
                    WHERE "order".user_id = $1;`;
    pool.query(queryText, [req.user.id])
        .then((results) => {
            console.log('results.row:', results.rows);
            res.send(results.rows)
        }).catch(error => {
            console.log('error in owner car GET:', error);
            res.sendStatus(500);
        });
});

router.get('/request', (req, res) => {
    let queryText = `SELECT "order".*, vehicle.make, vehicle.model, "user".username, vehicle.price FROM "order"
                    JOIN "user" ON "order".user_id = "user".id
                    JOIN vehicle ON "order".vehicle_id = vehicle.id
                    WHERE "vehicle".user_id = $1;`;
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