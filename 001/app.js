function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('hello');

const arr1 = [];

for (let i = 0; i < 10; i++) {
    const randomDigit = rand(1, 6); // tik del aiskumo
    arr1.push(randomDigit);
    // arr1[i] = randomDigit; // imanoma, bet ne universalu!
}

console.log(arr1);


let sum2 = 0;

for (let i = 0; i < 22; i++) {
    const randomDigit = rand(1, 6); // tik del aiskumo
    sum2 = sum2 + randomDigit;
    // sum2 += randomDigit;
}

console.log(sum2);