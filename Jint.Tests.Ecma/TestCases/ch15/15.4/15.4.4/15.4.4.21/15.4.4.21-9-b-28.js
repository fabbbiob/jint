/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-9-b-28.js
 * @description Array.prototype.reduce - decreasing length of array with prototype property causes prototype index property to be visited
 */


function testcase() {

        var testResult = false;

        function callbackfn(accum, val, idx, obj) {
            if (idx === 2 && val === "prototype") {
                testResult = true;
            }
        }
        var arr = [0, 1, 2, 3];

        try {
            Object.defineProperty(Array.prototype, "2", {
                get: function () {
                    return "prototype";
                },
                configurable: true
            });

            Object.defineProperty(arr, "0", {
                get: function () {
                    arr.length = 2;
                    return 1;
                },
                configurable: true
            });

            arr.reduce(callbackfn, "initialValue");

            return testResult;
        } finally {
            delete Array.prototype[2];
        }
    }
runTestCase(testcase);
