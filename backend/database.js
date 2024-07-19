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
const dataTest = "INSERT INTO users (id, email, password, username) VALUES ('23','nderespino@gmail.com', 'password123','nderespino')";
test.query(dataTest, (err,result) => {
if(err) throw err;
console.log("1 record inserted");
});
});