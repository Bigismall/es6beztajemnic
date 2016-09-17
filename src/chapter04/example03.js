logTitle("Rest parameters -  with iterator example");
//https://rainsoft.io/how-three-dots-changed-javascript/

function iterator() {
    var index = 0;
    return {
        next: () => ({ // Conform to Iterator protocol
            done : index >= this.length,
            value: this[index++]
        })
    };
}
var arrayLike = {
    0: 'Cat',
    1: 'Bird',
    2: 'Parrot',
    3: 'Horse',
    length: 4
};

arrayLike[Symbol.iterator] = iterator; //Conform to Iterable Protocol
var arrayFromObject = [...arrayLike];

log(arrayLike);
log(arrayFromObject);

