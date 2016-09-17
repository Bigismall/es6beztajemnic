logTitle("Default parameters - strings example");

function animalSentence(animals2 = "tigers", animals3 = "bears") {
    return `Lions and ${animals2} and ${animals3}! Oh my!`;
}

log(animalSentence());
log(animalSentence("Eagles"));
log(animalSentence("Eagles", "Parrots"));
log(animalSentence(undefined, "Horses"));


logTitle("Default parameters - numbers example");

function sumPair(a = 0, b = 0) {
    return a + b;
}

log(`Suma undefined + undefined = ${sumPair()}`);
log(`Suma 1 + undefined = ${sumPair(1)}`);
log(`Suma 1 + 2 = ${sumPair(1, 2)}`);
log(`Suma undefined +2 = ${sumPair(undefined, 2)}`);