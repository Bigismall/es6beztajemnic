# Ecma Script 6  bez tajemnic
Ecma Script 2015 - przykłady transpilacji  składni ES6 do ES5

Aby dokładnie wiedzieć, że kod Ecma Script 2015 

```javascript
function animalSentence(animals2 = "tigers", animals3 = "bears") {
    return `Lions and ${animals2} and ${animals3}! Oh my!`;
}
```
zostanie transpilowany do

```javascript
function animalSentence() {
    var animals2 = arguments.length <= 0 || arguments[0] === undefined ? "tigers" : arguments[0];
    var animals3 = arguments.length <= 1 || arguments[1] === undefined ? "bears" : arguments[1];

    return "Lions and " + animals2 + " and " + animals3 + "! Oh my!";
}
```



