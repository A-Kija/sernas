class K {

    static count = 22;

    constructor(a) {
        this.amount = a;
    }

    changeAmount(value) {
        this.amount = value;
    }

    changeCount(value) {
        K.count = value;
    }


}


const obj1 = new K(5);
const obj2 = new K(7);

obj2.changeAmount(77);
obj2.changeCount(88);
obj1.changeCount(100);

// console.log('obj1', obj1);
// console.log('obj2', obj2);

// console.log('static:', K.count);


class Anukas {
    static senelioPalikimas = 10000; // Eur

    static mokesciuInspekcija() {
        this.senelioPalikimas = 0; // this ==> klase Anukas
    }

    constructor() {
        this.pinigai = this.rand(1000, 2000); // this ==> objektas simas, rimas ir t.t.
    }

    isleisti() {
        if (this.pinigai >= 1000) {
            this.pinigai = this.pinigai - 1000;
            console.log('nusipirkau :)');
        } else {
            console.log('PINIGŲ NĖRA');
        }
    }

    paimtiIsSenelio() {
        if (this.constructor.senelioPalikimas != 0) { //this.constructor === Anukas
            this.constructor.senelioPalikimas -= 2000;
            this.pinigai += 2000;
        } else {
            console.log('PALIKIMAS IŠTAŠKYTAS - EIKIT DIRBT!');
        }
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

const simas = new Anukas();
const rimas = new Anukas();
const bimas = new Anukas();

simas.isleisti();

simas.isleisti();

rimas.isleisti();

rimas.isleisti();

Anukas.mokesciuInspekcija();

bimas.paimtiIsSenelio();
bimas.paimtiIsSenelio();
bimas.paimtiIsSenelio();
bimas.paimtiIsSenelio();

simas.paimtiIsSenelio();
rimas.paimtiIsSenelio();

// const mociutesPalikimas = 20000;
// Anukas.senelioPalikimas = mociutesPalikimas;

bimas.paimtiIsSenelio();
bimas.paimtiIsSenelio();
bimas.paimtiIsSenelio();
bimas.paimtiIsSenelio();
bimas.paimtiIsSenelio();

console.log(simas);
console.log(rimas);
console.log(bimas);
console.log('Liko: ', Anukas.senelioPalikimas);


class Zveris {
    static miskas = [];

    static naujasZveris(r) {
        return new this(r);
    }

    constructor(r) {
        this.rusis = r;
        this.constructor.miskas.push(this);
    }
}

const z1 = new Zveris('Baubas');

const z2 = new Zveris('Tigras');

const z3 = new Zveris('Triušis');

const z4 = Zveris.naujasZveris('Vilkas');

console.log(z4);

console.log(Zveris.miskas);