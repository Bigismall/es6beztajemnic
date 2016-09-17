"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
logTitle("Rest parameters");

function sumAll() {
    var sum = 0;

    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(numbers), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var n = _step.value;

            sum += n;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return sum;
}

log("Suma 1+2+3+4+5+6+7+8+9+10 = " + sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

logTitle("Default parameters - strings example");

function animalSentence() {
    var animals2 = arguments.length <= 0 || arguments[0] === undefined ? "tigers" : arguments[0];
    var animals3 = arguments.length <= 1 || arguments[1] === undefined ? "bears" : arguments[1];

    return "Lions and " + animals2 + " and " + animals3 + "! Oh my!";
}

log(animalSentence());
log(animalSentence("Eagles"));
log(animalSentence("Eagles", "Parrots"));
log(animalSentence(undefined, "Horses"));

logTitle("Default parameters - numbers example");

function sumPair() {
    var a = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var b = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    return a + b;
}

log("Suma undefined + undefined = " + sumPair());
log("Suma 1 + undefined = " + sumPair(1));
log("Suma 1 + 2 = " + sumPair(1, 2));
log("Suma undefined +2 = " + sumPair(undefined, 2));