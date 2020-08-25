"use strict";

/**
 * @see Calucation taken from: https://www.mathcelebrity.com/clockangle.php?num=1%3A15&pl=Clock+Angle
 * @description clockAngle calculates the angle based on the points created by hour hand and the minute hand, using 12-hour OR 24-hour clock notation
 * @param {number} hours | - number param
 * @param {number} minutes - A number param
 * @return {number} 
 *
 */
const clockAngle = (hours, minutes) => {

    /**
     * @description Military hour conversion
     */
    let hoursAfterMilitaryConversion = hours > 12 ? hours - 12 : hours;

    /**
     * @type {number} hourAngle
     * @type {number} minuteAngle
     * @type {number} totalAngle
     */
    let hourAngle = hoursAfterMilitaryConversion * 30,
        minuteAngle = minutes / 2,
        angle = Math.abs(hourAngle + minuteAngle);

    /**
     * @description Return the smallest angle
     */
    let angleFinal = angle > 180 ? 360 - angle : angle;
    
    return  angleFinal; 

};

module.exports = clockAngle;