const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const encryptLib = require('../modules/encryption');


/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = (`SELECT * FROM "person";`);
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
    const person = req.body;
    const password = encryptLib.encryptPassword(req.body.password);

    const queryText = `INSERT INTO "person" ("username", "password", "is_admin") VALUES ($1, $2, $3);`;
    pool.query(queryText, [person.username, password, person.is_admin])
    .then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

module.exports = router;