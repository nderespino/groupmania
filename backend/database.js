const mysql = require('mysql2')

const test = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'JosephCampa02595$',
    database:'groupmania_db'
});

test.connect((err) => {
if (err) throw err;
console.log("connected!");
});