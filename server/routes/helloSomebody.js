"use strict";

const express = require('express');
const router = new express.Router();

/**
 * @description Route that ...
 * @requires module:../utils/...
 */
router.get('/hello/:somebody', (req, res) => {
    
    /**
     * @type {number, string} somebody
     */
    let { somebody } = req.params;

    /**
     * @description Send response
     */
    res.status(201).send({
        hello: somebody
    });
});

module.exports = router;