logTitle("Destructuring - usage examples");
log("Key - Value paris");
for (var [key, value] of sampleVariousTypeMap) {
    log(` ${key} - ${value}`);
}

log("Keys list");
for (var [key] of sampleVariousTypeMap) {
    log(` ${key}`);
}

log("Values list");
for (var [, value] of sampleVariousTypeMap) {
    log(` ${value}`);
}

function returnArrayMultipleValues() {
    return sampleArray;
}
var [foo, bar] = returnArrayMultipleValues();
log(`Returned foo: ${foo} bar: ${bar}`);

function returnObjectMultipleValues() {
    return sampleObject;
}
var {name, surname, email} = returnObjectMultipleValues();
log(`Returned name: ${name} surname: ${surname} email: ${email}`);