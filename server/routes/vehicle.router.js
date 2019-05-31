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

// POST information of vehicle to car list
router.post('/', (req, res) => {
    if(req.isAuthenticated()) {
        let car = req.body;
        let queryText = `INSERT INTO vehicle ("year", "make", "model", "description", "price", "city", "state", "zip", "user_id")
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                        RETURNING "id";`;
        pool.query(queryText, [car.year, car.make, car.model, car.description, car.price, car.city, car.state, car.zip, req.user.id])
        .then((result) => {
            console.log('Vehicle id:',result.rows[0].id);
            let query = `INSERT INTO image ("image_url", "vehicle_id")
                        VALUES ($1, $2);`;
            pool.query(query, [req.body.image_url, result.rows[0].id])
            .then(result => {
                res.sendStatus(201)
            }).catch(error => {
                console.log('Error in post image', error);
                res.sendStatus(500);
            })
        }).catch(error => {
            console.log('Error in vehicle POST route', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
})

//GET only vehicle that belongs to logged in user
router.get('/owner', (req, res) => {
    let queryText = `SELECT vehicle.id, vehicle.make, vehicle.model FROM vehicle
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

//DELETE vehicle belonging to logged in user
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('is authenticated?', req.isAuthenticated());
    console.log('req.body:', req.params.id);
    let queryText = `DELETE FROM "vehicle" WHERE "vehicle"."user_id" = $1 AND "vehicle"."id" = $2;`;
    pool.query(queryText, [req.user.id, req.params.id])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error in delete route', error);
        res.sendStatus(500);
    })
})

router.get('/cardetail/:id', (req, res) => {
    console.log('In get route for vehicle details', req.params.id);
    let queryText = `SELECT vehicle.id, image.image_url, vehicle.user_id FROM vehicle
                    JOIN image ON image.vehicle_id = vehicle.id
                    WHERE vehicle.id = $1;`;
    pool.query(queryText, [req.params.id])
    .then(result => {
        console.log('result from GET vehicle details', result.rows);
        res.send(result.rows);
    }).catch(error => {
        res.sendStatus(500);
    })
})

module.exports = router;