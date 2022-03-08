function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const namas1 = {}; //objektas
namas1.kaminai = 2;
namas1.gyventojai = ['Vytas', 'Lina', 'Bebras'];
namas1.adresas = 'Guobų g. 13';

const namas2 = {
    kaminai: 5,
    gyventojai: ['Simas', 'Rimas'],
    adresas: 'Guobų g. 13A'
}


console.log(namas1.kaminai);

// namas1.gyventojai.forEach((g) => {
//     console.log(g);
// });

for (let i = 0; i < namas1.gyventojai.length; i++) {
    console.log(namas1.gyventojai[i]);
}

namas1.gyventojai.forEach(g => console.log(g));

const arr = [];

for (let i = 0; i < 7; i++) {
    const random = rand(1, 6);
    const obj = {};
    obj.number = random;
    arr.push(obj);
}

console.log(arr);