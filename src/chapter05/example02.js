logTitle("Destructuring - Objects");

var {name: nameValue, surname: surnameValue} = sampleObject;
log(`Name: ${nameValue} Surname: ${surnameValue}`);

var {name, surname, email} = sampleObject;
log(`Name: ${name} Surname: ${surname} E-mail:  ${email}`);

var {today, person: {name}, address: {city, street}} = sampleComplexObject;
log(`Today: ${today}  Name: ${name} City: ${city} Street: ${street}`);