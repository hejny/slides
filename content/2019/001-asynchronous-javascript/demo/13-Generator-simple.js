function* generator() {
    for (let i = 0; i < 100; i++) {
        yield i;
    }
}

const iterable = generator();

console.log(iterable.next());

for (let value of iterable) {
    console.log(value);
}
