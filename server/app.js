const express = require('express');
const app = express();
const port = 3003;
const cors = require('cors');
app.use(cors());
const mysql = require('mysql');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ser_nas',
});


// Route


app.get('/', (req, res) => {
    res.send('Hello Barsukai!');
})


app.get('/trees-manager', (req, res) => {
    // SELECT column1, column2, ...
    // FROM table_name;
    const sql = `
        SELECT
        *
        FROM medziai
    `;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.json(result);
    });

});

app.post('/trees-manager', (req, res) => {
    // INSERT INTO table_name (column1, column2, column3, ...)
    // VALUES (value1, value2, value3, ...);
    const sql = `
        INSERT INTO medziai
        (name, height, type)
        VALUES (?, ?, ?)
    `;

    con.query(sql, [
        req.body.title,
        !req.body.height ? 0 : req.body.height,
        req.body.type
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })

});

// DELETE FROM table_name
// WHERE some_column = some_value
app.delete('/trees-manager/:id', (req, res) => {
    const sql = `
        DELETE FROM medziai
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})









app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})