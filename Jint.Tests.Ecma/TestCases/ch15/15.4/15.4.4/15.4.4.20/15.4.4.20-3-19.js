/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.20/15.4.4.20-3-19.js
 * @description Array.prototype.filter - value of 'length' is an Object which has an own toString method.
 */


function testcase() {

        function callbackfn(val, idx, obj) {
            return true;
        }

        var obj = {
            1: 11,
            2: 9,
            length: {
                toString: function () {
                    return '2';
                }
            }
        };

        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return newArr.length === 1 && newArr[0] === 11;
    }
runTestCase(testcase);
