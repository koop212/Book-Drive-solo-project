const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // Get all images
    let queryText = `SELECT vehicle, ARRAY_AGG (image_url) image FROM vehicle
                    JOIN image ON image.vehicle_id = vehicle.id
                    GROUP BY vehicle.id
                    ORDER BY vehicle.id;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('Error in image get route', error);
            res.sendStatus(500);
        });
});

module.exports = router;