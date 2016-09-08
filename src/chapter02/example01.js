/*
 Example 01 - Simple generator example
 */


function* stupidGenerator(name) {
    yield "Witaj " + name + "!";
    yield  "Mam nadzieję że podoba ci się pogoda";
    if (name.startsWith("B")) {
        yield  "Ale fajnie, twoje imie zaczyna się  od litery B";
    }
    yield "To już wszystko";
}


var stupidGeneratorInstanceBigismall = stupidGenerator("Bigismall");
var stupidGeneratorInstanceClint = stupidGenerator("Clint");


logTitle("Show all fields (with name)");
for (var message of stupidGeneratorInstanceBigismall) {
    log(message);
}

logTitle("Show all fields (without name)");
for (var message of stupidGeneratorInstanceClint) {
    log(message);
}

