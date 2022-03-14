const h1 = document.querySelector('h1');
const p = document.querySelector('p');

fetch('https://jsonplaceholder.typicode.com/posts/77') // GET metodas
    .then(response => response.json()) // then -> laukimas atsakymo
    .then(data => { // then kol bus apdorotas atsakymas
        console.log('----->', data);
        // kodas
        h1.innerText = data.title;
        p.innerText = data.body;
    });

// ne cia