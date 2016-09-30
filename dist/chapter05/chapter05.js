"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toArray2 = require("babel-runtime/helpers/toArray");

var _toArray3 = _interopRequireDefault(_toArray2);

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [fibs].map(_regenerator2.default.mark);

/*
 Example 00 - Sample Data and Methods
 */

function logTitle(title) {
    console.log("");
    console.log("-------------------------------------------");
    console.log(title);
    console.log("-------------------------------------------");
    console.log("");
};

function log(message) {
    console.log(message);
};

var sampleSentence = "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.";

var sampleArray = [].concat((0, _toConsumableArray3.default)(Array(10).keys())).sort(function () {
    return 0.5 - Math.random();
});

var sampleComplexArray = [0, 1, 2, 3, [44, 45, 46, [471, 472], 48, 49], 5, 6, 7, 8, 9];

var sampleObject = { name: "Oren", surname: "Austin", email: "semper@hendreritidante.co.uk", city: "Morrovalle", age: 25, today: Date.now() };

var sampleCollection = [{ "name": "Calvin", "surname": "Castillo", "email": "nibh.vulputate@velnislQuisque.edu", "city": "Landeck" }, { "name": "Oren", "surname": "Austin", "email": "semper@hendreritidante.co.uk", "city": "Morrovalle" }, { "name": "Buckminster", "surname": "Johnston", "email": "sed.hendrerit.a@eudoloregestas.net", "city": "Olen" }, { "name": "Byron", "surname": "Cooke", "email": "Ut@Integersemelit.co.uk", "city": "Habergy" }, { "name": "Ciaran", "surname": "Alford", "email": "Vivamus.molestie@Nuncsollicitudincommodo.co.uk", "city": "Bussolengo" }, { "name": "Cedric", "surname": "Battle", "email": "tincidunt@ligulatortor.edu", "city": "Kelkheim" }, { "name": "Alec", "surname": "Rasmussen", "email": "taciti.sociosqu@utlacus.co.uk", "city": "Colleretto Castelnuovo" }, { "name": "Fuller", "surname": "Hooper", "email": "Nam.porttitor@tempuseuligula.com", "city": "Izel" }, { "name": "Brett", "surname": "Fox", "email": "venenatis@tempor.ca", "city": "Castello Tesino" }, { "name": "Armand", "surname": "Nicholson", "email": "magna.Nam@blanditcongue.ca", "city": "Bournemouth" }, { "name": "Kennan", "surname": "Blair", "email": "eleifend.vitae@sedduiFusce.net", "city": "Paranaguá" }, { "name": "Jack", "surname": "Lowe", "email": "erat.vitae@Nunc.ca", "city": "Roveredo in Piano" }];

var sampleDuplicatedWordsArray = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "novemeber", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu", "alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "novemeber", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu"];

var uniqueWordsSet = new _set2.default(sampleDuplicatedWordsArray);

var sampleVariousTypeMap = new _map2.default();

var keyString = "a string",
    keyObj = {},
    keyFunc = function keyFunc() {};

// setting the values
sampleVariousTypeMap.set(keyString, "value associated with \"a string\"");
sampleVariousTypeMap.set(keyObj, "value associated with keyObj");
sampleVariousTypeMap.set(keyFunc, "value associated with keyFunc");
logTitle("Destructuring - Arrays");

var _sampleArray = (0, _slicedToArray3.default)(sampleArray, 3);

var firstNumber = _sampleArray[0];
var secondNumber = _sampleArray[1];
var thirdNumber = _sampleArray[2];

log("Three first elements from sample array:  " + firstNumber + " " + secondNumber + " " + thirdNumber + " ");

var _uniqueWordsSet = (0, _slicedToArray3.default)(uniqueWordsSet, 3);

var firstSetElement = _uniqueWordsSet[0];
var secondSetElement = _uniqueWordsSet[1];
var thirdSetElement = _uniqueWordsSet[2];

log("Three first elements from sample set:  " + firstSetElement + " " + secondSetElement + " " + thirdSetElement);

var _sampleArray2 = (0, _toArray3.default)(sampleArray);

var firstNumber = _sampleArray2[0];
var secondNumber = _sampleArray2[1];
var thirdNumber = _sampleArray2[2];

var restOfArray = _sampleArray2.slice(3);

log("Three first elements  and tail from sample array:  " + firstNumber + " " + secondNumber + " " + thirdNumber + "  " + restOfArray);

//var sampleComplexArray = [0,1,2,3,[44,45,46,[471,472],48,49],5,6,7,8,9];
var thirdElement = sampleComplexArray[3];

var _sampleComplexArray$ = (0, _slicedToArray3.default)(sampleComplexArray[4], 4);

var firstDeep = _sampleComplexArray$[0];
var secondDeep = _sampleComplexArray$[1];

var _sampleComplexArray$$ = (0, _toArray3.default)(_sampleComplexArray$[3]);

var lastDeeper = _sampleComplexArray$$.slice(1);

log("Deep and deeper elements: " + thirdElement + " " + firstDeep + " " + secondDeep + " " + lastDeeper);

var a = 2,
    b = 5;
log(" Variables values switch before. a = " + a + ", b=" + b);
var _ref = [b, a];
a = _ref[0];
b = _ref[1];

log(" Variables values switch after. a = " + a + ", b=" + b);

function fibs() {
    var a, b, _ref2;

    return _regenerator2.default.wrap(function fibs$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    a = 0;
                    b = 1;

                case 2:
                    if (!true) {
                        _context.next = 10;
                        break;
                    }

                    _context.next = 5;
                    return a;

                case 5:
                    _ref2 = [b, a + b];
                    a = _ref2[0];
                    b = _ref2[1];
                    _context.next = 2;
                    break;

                case 10:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var _fibs = fibs();

var _fibs2 = (0, _slicedToArray3.default)(_fibs, 10);

var f1 = _fibs2[0];
var f2 = _fibs2[1];
var f3 = _fibs2[2];
var f4 = _fibs2[3];
var f5 = _fibs2[4];
var f6 = _fibs2[5];
var f7 = _fibs2[6];
var f8 = _fibs2[7];
var f9 = _fibs2[8];
var f10 = _fibs2[9];


log("Fibonacci : " + f1 + " " + f2 + " " + f3 + " " + f4 + " " + f5 + " " + f6 + " " + f7 + " " + f8 + " " + f9 + " " + f10);