"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [stupidGenerator, range].map(_regenerator2.default.mark);

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
/*
 Example 01 - Simple generator example
 */

function stupidGenerator(name) {
    return _regenerator2.default.wrap(function stupidGenerator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return "Witaj " + name + "!";

                case 2:
                    _context.next = 4;
                    return "Mam nadzieję że podoba ci się pogoda";

                case 4:
                    if (!name.startsWith("B")) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 7;
                    return "Ale fajnie, twoje imie zaczyna się  od litery B";

                case 7:
                    _context.next = 9;
                    return "To już wszystko";

                case 9:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var stupidGeneratorInstanceBigismall = stupidGenerator("Bigismall");
var stupidGeneratorInstanceClint = stupidGenerator("Clint");

logTitle("Show all fields (with name)");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = (0, _getIterator3.default)(stupidGeneratorInstanceBigismall), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var message = _step.value;

        log(message);
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

logTitle("Show all fields (without name)");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = (0, _getIterator3.default)(stupidGeneratorInstanceClint), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var message = _step2.value;

        log(message);
    }

    /*
     Example 02 - Simple range generator example
     */
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

function range(start, stop) {
    var i;
    return _regenerator2.default.wrap(function range$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    i = start;

                case 1:
                    if (!(i < stop)) {
                        _context2.next = 7;
                        break;
                    }

                    _context2.next = 4;
                    return i;

                case 4:
                    i++;
                    _context2.next = 1;
                    break;

                case 7:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

logTitle("Show range numbers");
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = (0, _getIterator3.default)(range(5, 10)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var value = _step3.value;

        log(value);
    }
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

logTitle("Use Range generator for Array.from");
var arrayFrom = (0, _from2.default)(range(10, 20));
log(arrayFrom);

logTitle("Object.filter implemented as generator");

Object.prototype.filter = _regenerator2.default.mark(function filter(test) {
    var item;
    return _regenerator2.default.wrap(function filter$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.t0 = _regenerator2.default.keys(this);

                case 1:
                    if ((_context3.t1 = _context3.t0()).done) {
                        _context3.next = 8;
                        break;
                    }

                    item = _context3.t1.value;

                    if (!(this.hasOwnProperty(item) && test.call(null, this[item]))) {
                        _context3.next = 6;
                        break;
                    }

                    _context3.next = 6;
                    return this[item];

                case 6:
                    _context3.next = 1;
                    break;

                case 8:
                case "end":
                    return _context3.stop();
            }
        }
    }, filter, this);
});

var filteredObject = sampleObject.filter(function (item) {
    return typeof item === "number";
});

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = (0, _getIterator3.default)(filteredObject), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var s = _step4.value;

        log(s);
    }
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