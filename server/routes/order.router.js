const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.post('/', (req, res) => {
    if(req.isAuthenticated()) {
        console.log('vehicle id from order post route', req.params.id);
        let order = req.body;
        let queryText = `INSERT INTO "order" ("start_date", "end_date", "user_id", "vehicle_id")
                        VALUES ($1, $2, $3, $4);`;
        pool.query(queryText, [order.start_date, order.end_date, req.user.id, req.params.id])
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




module.exports = router;