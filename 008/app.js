class Cat {

    constructor(name, svoris, t, seimininkas) {
        this.name = name;
        this.weight = svoris;
        this.tail = t;
        this.ownerName = seimininkas
    }

}


const cat = { name: 'Murka', weight: 5, tail: 22, ownerName: 'Marytė' };

const cat2 = { name: 'Rainys', weight: 7, tail: 27, ownerName: 'Marytės teta' };

console.log(cat.name);
console.log(cat2.name);

const dog = { name: 'Bobikas', weight: 17, tail: 0, ownerName: 'Marytės dėdė' };

console.table(cat);

console.table(cat2);

// console.table(dog);

const cat3 = new Cat('Ryžas', 5, 12, 'Saulėnas');
const cat4 = new Cat('Baltuoklis', 7, 20, 'Birutė');

console.table(cat3);
console.table(cat4);



// Programuotojas ANTANAS

class KauliukoMetimas {

    constructor(name) {
        this.vardas = name;
        this.rezultatas = this.rand(1, 6);
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    metaKauliuka() {
        this.rezultatas = this.rand(1, 6);
    }

    nunulinti() {
        this.rezultatas = 0;
    }

    pakeistiVarda(naujas) {
        this.vardas = naujas;
    }


}

// Programuotojas LINA

const zaidejas1 = new KauliukoMetimas('Jonas');

console.table(zaidejas1);

zaidejas1.metaKauliuka();

console.table(zaidejas1);

zaidejas1.nunulinti();

console.table(zaidejas1);

zaidejas1.pakeistiVarda('Petras');

console.table(zaidejas1);