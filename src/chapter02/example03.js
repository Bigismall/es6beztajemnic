logTitle("Object.filter implemented as generator");

Object.prototype.filter = function* filter(test) {
    for (var item in this) {
        if (this.hasOwnProperty(item) && test.call(null, this[item])) {
            yield this[item];
        }
    }
};

var filteredObject = sampleObject.filter(function (item) {
    return typeof item === "number";
});

for (var s of filteredObject) {
    log(s);
}



