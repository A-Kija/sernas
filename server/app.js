const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

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
  database: "ser_nas",
});

// Route

app.get("/", (req, res) => {
  res.send("Hello Barsukai!");
});



// **

app.get("/trees-manager", (req, res) => {
  const sql = `
  SELECT
  m.id AS id, m.photo, m.name, m.height, m.type, m.count, m.sum, GROUP_CONCAT(k.com, '-^o^-') AS comments, GROUP_CONCAT(k.id) AS cid 
  FROM medziai AS m
  LEFT JOIN komentarai AS k
  ON m.id = k.medziai_id
  GROUP BY m.id
`;
con.query(sql, (err, result) => {
if (err) throw err;
res.send(result);

});
});

// SELECT column_name(s)
// FROM table1
// LEFT JOIN table2
// ON table1.column_name = table2.column_name;

app.get("/trees-list/all", (req, res) => {
  const sql = `
        SELECT
        m.id AS id, m.photo, m.name, m.height, m.type, m.count, m.sum, GROUP_CONCAT(k.com, '-^o^-') AS comments, k.id AS cid 
        FROM medziai AS m
        LEFT JOIN komentarai AS k
        ON m.id = k.medziai_id
        GROUP BY m.id
    `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);

  });
});

// SELECT column1, column2, ...
// FROM table_name
// WHERE columnN LIKE pattern;

app.get("/trees-list-search", (req, res) => {
  const sql = `
        SELECT
        *
        FROM medziai
        WHERE name LIKE '%${req.query.s}%'
    `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/trees-vote/:id", (req, res) => {
  const sql = `
        UPDATE medziai
        SET count = count + 1, sum = sum + ?
        WHERE id = ?
    `;
  con.query(
    sql,
    [Math.max(Math.min(req.body.vote, 10), 1), req.params.id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
    }
  );
});

app.post("/trees-comment/:id", (req, res) => {
  const sql = `
    INSERT INTO komentarai
    (com, medziai_id)
    VALUES (?, ?)
    `;
  con.query(
    sql,
    [req.body.comment, req.params.id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
    }
  );
});




// SELECT column1, column2, ...
// FROM table_name
// ORDER BY column1, column2, ... ASC|DESC;
app.get("/trees-list-sorted/", (req, res) => {
  
  let sql;

  if (req.query.by == 'title' && req.query.dir == 'asc'){
    sql = `SELECT * FROM medziai ORDER BY name ASC`;
  }
  else if (req.query.by == 'title' && req.query.dir == 'desc'){
    sql = `SELECT * FROM medziai ORDER BY name DESC`;
  }
  else if (req.query.by == 'height' && req.query.dir == 'asc'){
    sql = `SELECT * FROM medziai ORDER BY height ASC`;
  }
  else{
    sql = `SELECT * FROM medziai ORDER BY height DESC`;
  }
    con.query(
      sql,
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
});







app.get("/trees-list/:cat", (req, res) => {
  if (req.params.cat != "all") {
    const sql = `
            SELECT
            *
            FROM medziai
            WHERE type = ?
        `;
    con.query(
      sql,
      [["leaf", "spike", "palm"].indexOf(req.params.cat) + 1],
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  }
});

app.post("/trees-manager", (req, res) => {
  // INSERT INTO table_name (column1, column2, column3, ...)
  // VALUES (value1, value2, value3, ...);
  const sql = `
        INSERT INTO medziai
        (name, height, type, photo)
        VALUES (?, ?, ?, ?)
    `;

  con.query(
    sql,
    [req.body.title, !req.body.height ? 0 : req.body.height, req.body.type, req.body.photo],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
    }
  );
});

// DELETE FROM table_name
// WHERE some_column = some_value
app.delete("/trees-manager/:id", (req, res) => {
  const sql = `
        DELETE FROM medziai
        WHERE id = ?
        `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.delete("/trees-delete-comment/:id", (req, res) => {
  const sql = `
        DELETE FROM komentarai
        WHERE id = ?
        `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});



// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put("/trees-manager/:id", (req, res) => {
  let sql;
  let args;
    if('' === req.body.photo && req.body.del == 0) {
      sql = `
        UPDATE medziai
        SET name = ?, type = ?, height = ?
        WHERE id = ?
    `;
      args = [req.body.title, req.body.type, req.body.height, req.params.id];
    } else if(1 == req.body.del) {
        sql = `
        UPDATE medziai
        SET name = ?, type = ?, height = ?, photo = NULL
        WHERE id = ?
    `;
    args = [req.body.title, req.body.type, req.body.height, req.params.id];
    } else {
      sql = `
      UPDATE medziai
      SET name = ?, type = ?, height = ?, photo = ?
      WHERE id = ?
  `;
  args = [req.body.title, req.body.type, req.body.height, req.body.photo, req.params.id];
    }
  con.query(
    sql,
    args,
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
    }
  );
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
