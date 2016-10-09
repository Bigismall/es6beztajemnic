"use strict";

/*
 Example 00 - Sample Data and Methods
 */

var _for = require("babel-runtime/core-js/symbol/for");

var _for2 = _interopRequireDefault(_for);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _ownKeys = require("babel-runtime/core-js/reflect/own-keys");

var _ownKeys2 = _interopRequireDefault(_ownKeys);

var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logTitle(title) {
    console.log("");
    console.log("-------------------------------------------");
    console.log(title);
    console.log("-------------------------------------------");
    console.log("");
}
;

function log(message) {
    console.log(message);
}
;

var sampleSentence = "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.";

var sampleArray = [].concat((0, _toConsumableArray3.default)(Array(10).keys())).sort(function () {
    return 0.5 - Math.random();
});

var sampleComplexArray = [0, 1, 2, 3, [44, 45, 46, [471, 472], 48, 49], 5, 6, 7, 8, 9];

var sampleObject = { name: "Oren", surname: "Austin", email: "semper@hendreritidante.co.uk", city: "Morrovalle", age: 25, today: Date.now() };

var sampleComplexObject = {
    person: { name: "Oren", surname: "Austin", email: "semper@hendreritidante.co.uk", age: 25 },
    address: { city: "Morrovalle", street: "Newton" },
    today: Date.now()
};

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
logTitle("Symbols");

var uniqueKey = (0, _symbol2.default)("uniqueKey 1");
var anotherUniqueKey = (0, _symbol2.default)("uniqueKey 2");

sampleObject[uniqueKey] = "I'm a value under UNIQUE symbol key";
sampleObject[anotherUniqueKey] = "I'm a another value under UNIQłUE symbol key";

log(sampleObject);

log(uniqueKey);
log(anotherUniqueKey);

log(sampleObject[uniqueKey]);
log(sampleObject[anotherUniqueKey]);

//Yo can't list Symbol keys in old way
log((0, _keys2.default)(sampleObject));
log((0, _getOwnPropertyNames2.default)(sampleObject));

//But...
log("Using: Object.getOwnPropertySymbols()");
log((0, _getOwnPropertySymbols2.default)(sampleObject));
log("Using: Reflect.ownKeys");
log((0, _ownKeys2.default)(sampleObject));

//Type of Symbole
console.log(typeof uniqueKey === "undefined" ? "undefined" : (0, _typeof3.default)(uniqueKey));

//Wont'work
//log("Sample text with symbol" + uniqueKey);
log("Sample text with symbol" + uniqueKey.toString());

logTitle("Symbols - in depth");

log("Show all private keys of Symbol object");
log((0, _ownKeys2.default)(_symbol2.default));

for (var i = 0; i < 5; i++) {
    log((0, _symbol2.default)("symbol-" + i));
}

log((0, _symbol2.default)('symbol-10'));
log((0, _symbol2.default)('symbol-10'));
log((0, _symbol2.default)('symbol-10'));

for (var i = 0; i < 5; i++) {
    log((0, _for2.default)("symbol-" + i));
}
log((0, _for2.default)('symbol-10'));
log((0, _for2.default)('symbol-10'));
log((0, _for2.default)('symbol-10'));