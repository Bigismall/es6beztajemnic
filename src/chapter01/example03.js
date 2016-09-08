/*
 Example 03 - More useful Iterator Implementation
 Source: https://jakearchibald.com/2014/iterators-gonna-iterate/
 */

function Words(str) {
    this._str = str;
}

Words.prototype[Symbol.iterator] = function () {
    var re = /\S+/g,
        str = this._str;

    return {
        next: function () {
            var match = re.exec(str);

            if (match) {
                return {value: match[0], done: false};
            }
            return {value: undefined, done: true};
        }
    }
};

logTitle("Iterator for extract words from sentence");
var lipsum = new Words(sampleSentence);
for (var word of lipsum) {
    log(word);
}



