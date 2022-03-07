function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const namas1 = ['Vytas', 'Aiste', 'Bebras'];

console.log('Bebras:', namas1[2]);

const namas2 = [
    ['Vytas', 'Lina'],
    ['Aiste', 'Alina'],
    ['Bebras', 'Žirafa']
];

console.log('Bebras:', namas2[2][0]);

console.table(namas2);
console.log('namo aukštis: ', namas2.length);

const hause1 = [];
for (let i = 0; i < 11; i++) {
    hause1.push(rand(5, 25));
}
console.table(hause1);