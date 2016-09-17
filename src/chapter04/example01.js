logTitle("Rest parameters");

function sumAll(...numbers) {
    var sum = 0;

    for (var n of numbers) {
        sum += n;
    }
    return sum;
}


log(`Suma 1+2+3+4+5+6+7+8+9+10 = ${sumAll(1,2,3,4,5,6,7,8,9,10)}`);
