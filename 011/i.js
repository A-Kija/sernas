const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Karve {

    constructor() {
        this.melzejai = [];
        for (let i = 0; i < 30; i++) {
            this.melzejai.push(this.rand(100, 999));
        }
    }


    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

console.log(new Karve());

// paskirstyti

const arr = ['Krokodilas', 'Gena'];


const b = (a, b) => {
    console.log('a:', a, 'b:', b);
}


b(...arr);
// b('Krokodilas', 'Gena');

const arr2 = [...arr];
// const arr2 = ['Krokodilas', 'Gena'];

console.log(arr2);


console.log(Array(33));


const arrCopy = arr.map(value => {
    return value;
});


console.log(arrCopy);

const big = [];

for (let i = 0; i < 100; i++) {
    big.push(rand(100, 999));
}


// const kul = big.map(v => {
//     if (v > 500) {
//         return 0;
//     }
//     return v;
// });

// Array(55) !== [,,,,]

// const kul = big.map(v => {
//     if (v < 300) {
//         return [0, v];
//     }
//     return v;
// });

// I ? II : III
// salyga ? if : else
const kul = big.map(v => v < 300 ? [0, v] : v);

console.log(big);
console.log(kul);