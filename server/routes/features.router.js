const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = (`SELECT features.*,
    parks.name AS park_name
    FROM "features" left JOIN "parks" ON "features".park = "parks".id ORDER BY id;`);
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

// PUT ROUTE
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let queryText = (`UPDATE "features" SET "last_maintained_by" = $2` +
    `WHERE "id" = $1;`);
    pool.query(queryText, [id, req.user.username]).then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

router.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let park = req.body.park
    console.log('hit router')
    let queryText = (`UPDATE "features" SET "park" = $2` +
    `WHERE "id" = $1;`);
    pool.query(queryText, [id, park]).then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});


module.exports = router;