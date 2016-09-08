/*
 Example 02 - Iterator Implementation
 */

function CollectionClass(dataToIterate) {
    this.data = dataToIterate;
    this.timestamp = Date.now();

    this[Symbol.iterator] = function () {
        var nextIndex = 0;
        var _self = this;
        return {
            next: function () {
                return nextIndex < _self.data.length ? {value: _self.data[nextIndex++].name, done: false} : {done: true};
            }
        };
    };
};

var iterateCollectionInstance = new CollectionClass(sampleObject);

logTitle("Iterator for Custom Collection");
for (var element of iterateCollectionInstance) {
    log(element);
}


