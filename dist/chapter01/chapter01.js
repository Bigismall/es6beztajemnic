"use strict";

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator6 = require("babel-runtime/core-js/symbol/iterator");

var _iterator7 = _interopRequireDefault(_iterator6);

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

var sampleArray = [].concat((0, _toConsumableArray3.default)(Array(10).keys())).sort(function () {
    return 0.5 - Math.random();
});

var sampleObject = [{ "name": "Calvin", "surname": "Castillo", "email": "nibh.vulputate@velnislQuisque.edu", "city": "Landeck" }, { "name": "Oren", "surname": "Austin", "email": "semper@hendreritidante.co.uk", "city": "Morrovalle" }, { "name": "Buckminster", "surname": "Johnston", "email": "sed.hendrerit.a@eudoloregestas.net", "city": "Olen" }, { "name": "Byron", "surname": "Cooke", "email": "Ut@Integersemelit.co.uk", "city": "Habergy" }, { "name": "Ciaran", "surname": "Alford", "email": "Vivamus.molestie@Nuncsollicitudincommodo.co.uk", "city": "Bussolengo" }, { "name": "Cedric", "surname": "Battle", "email": "tincidunt@ligulatortor.edu", "city": "Kelkheim" }, { "name": "Alec", "surname": "Rasmussen", "email": "taciti.sociosqu@utlacus.co.uk", "city": "Colleretto Castelnuovo" }, { "name": "Fuller", "surname": "Hooper", "email": "Nam.porttitor@tempuseuligula.com", "city": "Izel" }, { "name": "Brett", "surname": "Fox", "email": "venenatis@tempor.ca", "city": "Castello Tesino" }, { "name": "Armand", "surname": "Nicholson", "email": "magna.Nam@blanditcongue.ca", "city": "Bournemouth" }, { "name": "Kennan", "surname": "Blair", "email": "eleifend.vitae@sedduiFusce.net", "city": "Paranaguá" }, { "name": "Jack", "surname": "Lowe", "email": "erat.vitae@Nunc.ca", "city": "Roveredo in Piano" }];

var duplicatedWordsArray = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "novemeber", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu", "alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "novemeber", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu"];

var uniqueWordsSet = new _set2.default(duplicatedWordsArray);

var variousTypeMap = new _map2.default();

var keyString = "a string",
    keyObj = {},
    keyFunc = function keyFunc() {};

// setting the values
variousTypeMap.set(keyString, "value associated with \"a string\"");
variousTypeMap.set(keyObj, "value associated with keyObj");
variousTypeMap.set(keyFunc, "value associated with keyFunc");
/*
 Example 01 - For Of  Loop
 */

//Iterate over array
logTitle("Iterate over array");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = (0, _getIterator3.default)(sampleArray), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        log(element);
    }

    //Iterate over collection
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

logTitle("Iterate over collection");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = (0, _getIterator3.default)(sampleObject), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var element = _step2.value;

        log(element);
    }

    //Iterate over set
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

logTitle("Iterate over set");
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = (0, _getIterator3.default)(uniqueWordsSet), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var element = _step3.value;

        log(element);
    }

    //Iterate over map
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

logTitle("Iterate over map");
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = (0, _getIterator3.default)(variousTypeMap), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = (0, _slicedToArray3.default)(_step4.value, 2);

        var key = _step4$value[0];
        var value = _step4$value[1];

        log([key, value]);
    }
    /*
     Example 02 - Iterator Implementation
     */
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

function CollectionClass(dataToIterate) {
    this.data = dataToIterate;
    this.timestamp = Date.now();

    this[_iterator7.default] = function () {
        var nextIndex = 0;
        var _self = this;
        return {
            next: function next() {
                return nextIndex < _self.data.length ? { value: _self.data[nextIndex++].name, done: false } : { done: true };
            }
        };
    };
};

var iterateCollectionInstance = new CollectionClass(sampleObject);

logTitle("Iterator for Custom Collection");
var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
    for (var _iterator5 = (0, _getIterator3.default)(iterateCollectionInstance), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var element = _step5.value;

        log(element);
    }
} catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
        }
    } finally {
        if (_didIteratorError5) {
            throw _iteratorError5;
        }
    }
}