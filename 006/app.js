let suma = 0;

suma = 0.1 + 0.2;

suma = suma + 555555;

console.log(suma.toFixed(5));
console.log(suma.toPrecision(5));

const O = { bla: 'bla-bla' };

console.log(O);
const J = JSON.stringify(O);
console.log(J);
const OB = JSON.parse(J);
console.log(OB);


// localStorage.setItem('Lentyna5', 78.55);
// localStorage.setItem('manoLentyna', JSON.stringify(77));
// localStorage.setItem('manoLentyna44', JSON.stringify(['bl,ue', 'red', '75', 75]));


// console.log(parseFloat(localStorage.getItem('Lentyna5')));
// console.log(JSON.parse(localStorage.getItem('manoLentyna')));
// console.log(JSON.parse(localStorage.getItem('manoLentyna44')));


// console.log(localStorage.getItem('Lentyna5') === null);

// const zebrai = {
//     z1: 'Maša',
//     z2: 'Griša'
// };

// localStorage.setItem('zebras', JSON.stringify(zebrai));


let gameCounter = localStorage.getItem('gameSave');
if (gameCounter === null) {
    localStorage.setItem('gameSave', 0);
    gameCounter = 0;
}


const button = document.querySelector('button');
const h1 = document.querySelector('h1');

h1.innerText = gameCounter;


button.addEventListener('click', () => {
    gameCounter++;
    h1.innerText = gameCounter;
    localStorage.setItem('gameSave', gameCounter);
});

// for (const i in localStorage) {
//     console.log(i);
// }

// const items = {...localStorage };
// console.log(items);