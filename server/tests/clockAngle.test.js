"use strict";

const clockAngle = require('../utils/clockAngle');

/**
 * @description clockAngle utility test
 * @see For params to test with, use: https://www.mathcelebrity.com/clockangle.php?num=1%3A15&pl=Clock+Angle (doesn't support 24hr conversion)
 * @requires module:../utils/clockAngle
 */
test('calculate clock angle based on hour and minutes hands position', () => {
    
    expect(clockAngle(1, 0)).toBe(30);
    expect(clockAngle(2, 0)).toBe(60);
    expect(clockAngle(3, 0)).toBe(90);;
    expect(clockAngle(6, 0)).toBe(180);
    expect(clockAngle(12, 0)).toBe(0);
    expect(clockAngle(13, 0)).toBe(30);
    expect(clockAngle(15, 0)).toBe(90);

    expect(clockAngle(1, 15)).toBe(37.5);
    expect(clockAngle(2, 25)).toBe(72.5);
    expect(clockAngle(3, 35)).toBe(107.5);

    expect(clockAngle(5, 15)).toBe(157.5);
    expect(clockAngle(6, 32)).toBe(164);
    expect(clockAngle(7, 55)).toBe(122.5);
    expect(clockAngle(15, 8)).toBe(94);
    expect(clockAngle(18, 26)).toBe(167);
    expect(clockAngle(22, 48)).toBe(36);
    
});