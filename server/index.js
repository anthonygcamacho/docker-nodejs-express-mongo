"use strict";

/**
 * @author Anthony Camacho <anthony.g.camacho@gmail.com>
 * @description Application that calculates the angle between the hour and minute hand on a clock.
 * @version 1.0.0
 */

const app = require('./app');
const port = process.env.PORT;

const test = 'fart';

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

console.log(test);