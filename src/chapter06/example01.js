logTitle("Symbols");

let uniqueKey = Symbol("uniqueKey 1");
let anotherUniqueKey = Symbol("uniqueKey 2");

sampleObject[uniqueKey] = "I'm a value under UNIQUE symbol key";
sampleObject[anotherUniqueKey] = "I'm a another value under UNIQłUE symbol key";

log(sampleObject);

log(uniqueKey);
log(anotherUniqueKey);

log(sampleObject[uniqueKey]);
log(sampleObject[anotherUniqueKey]);

//Yo can't list Symbol keys in old way
log(Object.keys(sampleObject));
log(Object.getOwnPropertyNames(sampleObject));

//But...
log("Using: Object.getOwnPropertySymbols()");
log(Object.getOwnPropertySymbols(sampleObject));
log("Using: Reflect.ownKeys");
log(Reflect.ownKeys(sampleObject));

//Type of Symbole
console.log(typeof uniqueKey);

//Wont'work
//log("Sample text with symbol" + uniqueKey);
log("Sample text with symbol" + uniqueKey.toString());
