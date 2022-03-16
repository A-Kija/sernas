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

    constructor() {
        this.pinigai = this.rand(1000, 2000);
    }

    isleisti() {
        if (this.pinigai >= 1000) {
            this.pinigai = this.pinigai - 1000;
            console.log('nusipirkau :)');
        } else {
            console.log('PINIGŲ NĖRA');
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

console.log(simas);
console.log(rimas);
console.log(bimas);
console.log('Liko: ', Anukas.senelioPalikimas);