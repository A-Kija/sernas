function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const bb = document.querySelector('#bb');


bb.addEventListener('click', e => {
    e.stopPropagation(); // evento stabdymas
    console.log('Valio!!!');
});

bb.addEventListener('mouseover', () => {
    console.log('Pelė ateina spausti mygtuko');
});

bb.addEventListener('mouseout', () => {
    console.log('Pelė išeina');
});

const list = document.querySelectorAll('.animal-list h2');

list.forEach(animal => {
    animal.addEventListener('click', e => {
        console.log(e.target.innerText, 'Valio!!!');
        console.log(e.target);
    });

    animal.addEventListener('mouseover', () => {
        console.log(animal.innerText, 'Pelė ateina spausti mygtuko');
    });

    animal.addEventListener('mouseout', () => {
        console.log(animal.innerText, 'Pelė išeina');
    });
});


const bd = document.querySelector('.bd');


bd.addEventListener('click', () => {
    bd.style.backgroundColor = 'red';
});



console.log(list);


const kodas1 = document.querySelector('#duok-kodo');

const html = `
<h2>
    <i>
        Voverė
    </i>
</h2>
`;

kodas1.innerHTML = html;


const kodas2 = document.querySelector('#duok-dar-kodo');

const h2 = document.createElement('h2'); // sukurti elementa
const vovere = document.createTextNode('Voverė'); // sukurt elemento turini
h2.appendChild(vovere); // elemento turini ideti i elementa
kodas2.appendChild(h2); // elementa ideti i body

// kodas1.appendChild(h2);

console.log(h2, vovere);


const i1 = document.querySelector('#i1');

i1.addEventListener('input', () => {
    console.log(i1.value);
});


const bb1 = document.querySelector('#bb1');

bb1.addEventListener('click', () => {
    console.log('Enter: ' + i1.value);
    console.log('Enter: ' + i2.value);
})


const i2 = document.querySelector('#i2');

i2.addEventListener('change', () => {
    console.log(i2.value);
});


const ch = document.querySelectorAll('[type=checkbox]');

const bb2 = document.querySelector('#bb2');

bb2.addEventListener('click', () => {
    const c = [];

    ch.forEach(checkbox => {
        if (checkbox.checked) {
            c.push(checkbox.value);
        }
    })
    console.log(c);
});