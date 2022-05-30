const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
md5 = require('js-md5');
const uuid = require('uuid');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "auth",
});

const doAuth = function(req, res, next) {
    if (0 === req.url.indexOf('/admin')) {
        const sql = `
        SELECT
        name
        FROM users
        WHERE session = ?
    `;
        con.query(
            sql, [req.headers['authorization'] || ''],
            (err, results) => {
                if (err) throw err;
                if (!results.length) {
                    res.status(401).send({});
                    req.connection.destroy();
                } else {
                    next();
                }
            }
        );
    } else {
        next();
    }
}
app.use(doAuth)

// Route
app.get("/", (req, res) => {
    res.send("Hello Barsukai!");
});


app.get("/admin/hello", (req, res) => {
    res.send("Hello Admin!");
});

app.get("/login-check", (req, res) => {
    const sql = `
    SELECT
    name
    FROM users
    WHERE session = ?
    `;
    con.query(sql, [req.headers['authorization'] || ''], (err, result) => {
        if (err) throw err;
        if (!result.length) {
            res.send({ msg: 'error' });
        } else {
            res.send({ msg: 'ok' });
        }
    });
});


app.post("/login", (req, res) => {
    const key = uuid.v4();
    const sql = `
    UPDATE users
    SET session = ?
    WHERE name = ? AND pass = ?
  `;
    con.query(sql, [key, req.body.user, md5(req.body.pass)], (err, result) => {
        if (err) throw err;
        if (!result.affectedRows) {
            res.send({ msg: 'error', key: '' });
        } else {
            res.send({ msg: 'ok', key });
        }
    });
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});