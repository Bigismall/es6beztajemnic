logTitle("Destructuring - Default values");

var {name: nameValue, surname: surnameValue, tommorow: tommorowValue = "Friday?"} = sampleObject;   //Tommorow property doesn't exists in sampleObject
log(`Name: ${nameValue} Surname: ${surnameValue} TommorowValue: ${tommorowValue}`);

var [missing = true] = [];
log(`Missing param: ${missing}`);

var { message: msg = "Something went wrong." } = {};
log(`Missing msg: ${msg}`);
 
var { x = 3 } = {};
log(`Missing x: ${x}`);