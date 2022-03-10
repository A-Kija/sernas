fetch('https://jsonplaceholder.typicode.com/posts/81') // GET metodas
    .then(response => response.json()) // then -> laukimas atsakymo
    .then(data => { // then kol bus apdorotas atsakymas
        console.log('----->', data);
        // kodas


    });

// ne cia