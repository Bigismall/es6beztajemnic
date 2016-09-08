/*
 Example 02 - Simple range generator example
 */


function* range(start, stop) {
    for (var i = start; i < stop; i++) {
        yield i;
    }
}


logTitle("Show range numbers");
for (var value of range(5, 10)) {
    log(value);
}

logTitle("Use Range generator for Array.from");
var arrayFrom = Array.from(range(10, 20));
log(arrayFrom);
