/*
 Example 01 - For Of  Loop
 */

//Iterate over array
logTitle("Iterate over array");
for (var element of sampleArray) {
    log(element);
}

//Iterate over object
logTitle("Iterate over object  (FOR IN)");
for (var element in sampleObject) {
    log(element);
}

//Iterate over collection
logTitle("Iterate over collection");
for (var element of sampleCollection) {
    log(element);
}

//Iterate over set
logTitle("Iterate over set");
for (var element of uniqueWordsSet) {
    log(element);
}

//Iterate over map
logTitle("Iterate over map");
for (var [key,value] of sampleVariousTypeMap) {
    log([key,value]);
}