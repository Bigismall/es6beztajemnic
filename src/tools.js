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

var sampleArray = [...Array(10).keys()].sort(function () {
    return 0.5 - Math.random()
});

var sampleObject = [
    {"name": "Calvin", "surname": "Castillo", "email": "nibh.vulputate@velnislQuisque.edu", "city": "Landeck"},
    {"name": "Oren", "surname": "Austin", "email": "semper@hendreritidante.co.uk", "city": "Morrovalle"},
    {"name": "Buckminster", "surname": "Johnston", "email": "sed.hendrerit.a@eudoloregestas.net", "city": "Olen"},
    {"name": "Byron", "surname": "Cooke", "email": "Ut@Integersemelit.co.uk", "city": "Habergy"},
    {"name": "Ciaran", "surname": "Alford", "email": "Vivamus.molestie@Nuncsollicitudincommodo.co.uk", "city": "Bussolengo"},
    {"name": "Cedric", "surname": "Battle", "email": "tincidunt@ligulatortor.edu", "city": "Kelkheim"},
    {"name": "Alec", "surname": "Rasmussen", "email": "taciti.sociosqu@utlacus.co.uk", "city": "Colleretto Castelnuovo"},
    {"name": "Fuller", "surname": "Hooper", "email": "Nam.porttitor@tempuseuligula.com", "city": "Izel"},
    {"name": "Brett", "surname": "Fox", "email": "venenatis@tempor.ca", "city": "Castello Tesino"},
    {"name": "Armand", "surname": "Nicholson", "email": "magna.Nam@blanditcongue.ca", "city": "Bournemouth"},
    {"name": "Kennan", "surname": "Blair", "email": "eleifend.vitae@sedduiFusce.net", "city": "Paranaguá"},
    {"name": "Jack", "surname": "Lowe", "email": "erat.vitae@Nunc.ca", "city": "Roveredo in Piano"}
];


var duplicatedWordsArray = [
    "alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "novemeber", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu",
    "alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "novemeber", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu"
];

var uniqueWordsSet = new Set(duplicatedWordsArray);

var variousTypeMap = new Map();

var keyString = "a string",
    keyObj = {},
    keyFunc = function () {
    };

// setting the values
variousTypeMap.set(keyString, "value associated with \"a string\"");
variousTypeMap.set(keyObj, "value associated with keyObj");
variousTypeMap.set(keyFunc, "value associated with keyFunc");