// const arr = []; // sutrumpinimas
const arr = new Array();

arr[0] = 'Dramblys';
arr[1] = 'Šluota';
arr[2] = 'Tankas';

console.log(arr, arr[2]);

const obj = {};

obj.animal = 'Dramblys';
obj.house = 'Šluota';
obj.war = 'Tankas';

console.log(obj);

// obj.forEach(element => {
//     console.log(element);
// });


const map = new Map(); //() {} []

let a;

const f = () => console.log('Hi!');
const f1 = () => console.log('Hi!');

map.set('animal', 'Dramblys');
map.set('house', 'Šluota');
map.set(f, 'Tankas');
map.set('u', a);



map.delete('war');

console.log(map, map.size);

// map.forEach((element, i) => {
//     console.log(i, '=>', element);
// });


console.log(new Map(JSON.parse(JSON.stringify([...map]))));


class PirkiniuKrepselis {

    constructor() {
        this.turinys = new Map();
    }

    idetiSureli(kiekis) {
        this.ideti(kiekis, 'surelis');
    }
    idetiPieno(kiekis) {
        this.ideti(kiekis, 'pienukas');
    }
    idetiDuonos(kiekis) {
        this.ideti(kiekis, 'duonele');
    }
    ideti(kiekis, produktas) {
        let suma;
        if (this.turinys.has(produktas)) {
            suma = this.turinys.get(produktas) + kiekis;
            this.turinys.set(produktas, suma);
        } else {
            this.turinys.set(produktas, kiekis);
        }
    }
    krepselioTurinys() {
        console.log(this.turinys);
    }

}

const K = new PirkiniuKrepselis();

K.idetiPieno(8);
K.idetiPieno(8);

K.krepselioTurinys();