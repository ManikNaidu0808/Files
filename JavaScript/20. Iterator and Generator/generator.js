function* generators(i){
    yield i;
    yield i+10;
    yield i+20;
}

const gen = generators(10);
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

// ========================================================================================

