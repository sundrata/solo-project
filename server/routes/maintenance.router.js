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
    FROM "maintenance" JOIN "features" ON "maintenance".feature_id = "features".id
    ORDER by "id" DESC;`);
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
    const queryText = `INSERT INTO "maintenance" ("feature_id", "was_maintained", "who_maintained", "timestamp", "when") VALUES ($1, $2, $3, current_timestamp, current_timestamp);`;
    pool.query(queryText, [maintenance.feature_id, maintenance.was_maintained, req.user.username])
    .then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

module.exports = router;