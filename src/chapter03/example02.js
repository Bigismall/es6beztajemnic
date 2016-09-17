logTitle("String templates - object example");

sampleObject.toString = function () {
    return ` ${this.name}  ${this.surname}  @${this.email}`;
}

var objectStringTemplate = `Hello Object -> ${sampleObject}`;

log(objectStringTemplate);

