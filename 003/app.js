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