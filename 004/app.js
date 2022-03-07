function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const namas1 = ['Vytas', 'Aiste', 'Bebras'];

// console.log('Bebras:', namas1[2]);

const namas2 = [
    ['Vytas', 'Lina'],
    ['Aiste', 'Alina'],
    ['Bebras', 'Žirafa']
];

// console.log('Bebras:', namas2[2][0]);

// console.table(namas2);
// console.log('namo aukštis: ', namas2.length);

const hause1 = [];
for (let i = 0; i < 11; i++) {
    hause1.push(rand(5, 25));
}


const hause2 = [];
for (let i = 0; i < 11; i++) {

    // aukstas
    const floor = [];
    for (let k = 0; k < 2; k++) {
        floor.push(rand(5, 25));
    }
    // aukstas

    hause2.push(floor);
}

console.table(hause1);
console.table(hause2);

for (let i = 0; i < hause1.length; i++) {
    console.log(hause1[i]); // i -> 0, 1, 2... 9, 10
}

// hause1.forEach();
// hause1.forEach((el) => {});
// hause1.forEach((el) => {

// });
console.table('-------');
// hause1.forEach(el => console.log(el));
hause1.forEach(el => {
    console.log(el);
});