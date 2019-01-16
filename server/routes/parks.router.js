const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = (`SELECT * FROM "parks";`);
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
});

// PUT
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let park = req.body
    let queryText = (`UPDATE "features" SET "park" = $2` +
    `WHERE "id" = $1;`);
    pool.query(queryText, [id, park.park]).then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});
module.exports = router;