function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const g = ['Vytas', 'Lina', 'Bebras'];

const savybe = 'gyventojai';

const namas1 = {}; //objektas
namas1.kaminai = 2;
namas1[savybe] = g; // => namas.gyventojai
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
    // vienas
    const random = rand(1, 6);
    //
    const obj = {};
    obj.number = random;
    arr.push(obj);
}

const arr1 = [];

for (let i = 0; i < 7; i++) {
    // masyvu rand
    const masyvas = [];
    for (let k = 0; k < 5; k++) {
        const random = rand(1, 6);
        masyvas.push(random);
    }
    //
    const obj = {};
    obj.numbers = masyvas;
    arr1.push(obj);
}

console.log(arr1);

const cats = ['Murka', 'Juodis', 'Kakalius', 'Meilutė', 'Pifas', 'Rainius'];

console.log(cats[rand(0, cats.length - 1)]);


const ft = !rand(0, 1);

const cat = {};
cat.name = cats[rand(0, cats.length - 1)];
cat.pills = {};
cat.pills.blue = !rand(0, 1);
cat.pills.red = !rand(0, 1);

console.log(cat);