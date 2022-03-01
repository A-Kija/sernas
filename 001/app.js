function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('hello');

const arr1 = [];

for (let i = 0; i < 10; i++) {
    const randomDigit = rand(1, 6);
    arr1.push(randomDigit);
}

console.log(arr1);