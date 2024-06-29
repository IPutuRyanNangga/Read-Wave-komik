const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'komik'
});

connection.connect();

app.use(express.static('.'));

app.get('/api/comics', (req, res) => {
    connection.query('SELECT * FROM comics', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});