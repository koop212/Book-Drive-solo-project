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
                        VALUES ($1, $2)
                        RETURNING "vehicle_id";`;
            pool.query(query, [req.body.image_url, result.rows[0].id])
            .then(result => { 
                console.log('Vehicle from image table', result.rows[0].vehicle_id);
                let feature = req.body;
                let query = `INSERT INTO features ("all_wheel_drive", "pet_friendly", "heated_seats", 
                            "convertible", "sunroof", "automatic", "manual", "electric", "gas", "hybrid", "vehicle_id")
                            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
                pool.query(query, [feature.all_wheel_drive, feature.pet_friendly, feature.heated_seats, 
                                feature.convertible, feature.sunroof, feature.automatic, feature.manual, 
                                feature.electric, feature.gas, feature.hybrid, result.rows[0].vehicle_id])
                .then(result => {
                    res.sendStatus(201)
                }).catch(error => {
                    console.log('Error in post features', error)
                    res.sendStatus(500)
                })
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

router.get('/cardetails/:id', (req, res) => {
    console.log('In get route for vehicle details', req.params.id);
    let queryText = `SELECT vehicle.*, ARRAY_AGG(image.image_url) AS images, "user".first_name FROM vehicle
                    JOIN image ON image.vehicle_id = vehicle.id
                    JOIN "user" ON vehicle.user_id = "user".id
                    WHERE vehicle.id = $1
                    GROUP BY vehicle.id, "user".first_name;`;
    pool.query(queryText, [req.params.id])
    .then(result => {
        console.log('result from GET vehicle details', result.rows);
        res.send(result.rows);
    }).catch(error => {
        res.sendStatus(500);
    })
})

module.exports = router;