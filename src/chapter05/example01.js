logTitle("Destructuring - Arrays");

var [firstNumber, secondNumber, thirdNumber] = sampleArray;
log(`Three first elements from sample array:  ${firstNumber} ${secondNumber} ${thirdNumber} `);

var [firstSetElement, secondSetElement, thirdSetElement] = uniqueWordsSet;
log(`Three first elements from sample set:  ${firstSetElement} ${secondSetElement} ${thirdSetElement}`);

var [firstNumber, secondNumber, thirdNumber, ...restOfArray] = sampleArray;
log(`Three first elements  and tail from sample array:  ${firstNumber} ${secondNumber} ${thirdNumber}  ${restOfArray}`);

//var sampleComplexArray = [0,1,2,3,[44,45,46,[471,472],48,49],5,6,7,8,9];
var [, , , thirdElement, [firstDeep, secondDeep, , [, ...lastDeeper]]] = sampleComplexArray;
log(`Deep and deeper elements: ${thirdElement} ${firstDeep} ${secondDeep} ${lastDeeper}`);

var a = 2, b = 5;
log(` Variables values switch before. a = ${a}, b=${b}`);
[a, b] = [b, a];
log(` Variables values switch after. a = ${a}, b=${b}`);


function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
 
var [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10] = fibs();

log(`Fibonacci : ${f1} ${f2} ${f3} ${f4} ${f5} ${f6} ${f7} ${f8} ${f9} ${f10}`);



