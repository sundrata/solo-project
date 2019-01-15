const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = (`SELECT maintenance.*,
    features.name AS feature_name,
    features.image AS feature_image
    FROM "maintenance" JOIN "features" ON "maintenance".feature_id = "features".id;`);
    pool.query(queryText).then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const maintenance = req.body;
    const queryText = `INSERT INTO "maintenance" ("feature_id", "who_maintained", "in_park", "was_maintained", "timestamp") VALUES ($1, $2, $3, $4, current_timestamp);`;
    pool.query(queryText, [maintenance.feature_id, maintenance.who_maintained, maintenance.in_park, maintenance.was_maintained])
    .then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    const queryUpdate = `UPDATE maintenance SET (feature_name, feature_image, in_park) =
(SELECT name, image, park FROM features
 WHERE features.id = maintenance.feature_id);`;
    pool.query(queryUpdate)
    .then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

module.exports = router;