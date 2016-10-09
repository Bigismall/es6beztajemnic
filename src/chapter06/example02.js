logTitle("Symbols - in depth");

log("Show all private keys of Symbol object");
log(Reflect.ownKeys(Symbol));

for (var i = 0; i < 5; i++) {
    log(Symbol(`symbol-${i}`));
}

log(Symbol('symbol-10'));
log(Symbol('symbol-10'));
log(Symbol('symbol-10'));


for (var i = 0; i < 5; i++) {
    log(Symbol.for(`symbol-${i}`));
}
log(Symbol.for('symbol-10'));
log(Symbol.for('symbol-10'));
log(Symbol.for('symbol-10'));

