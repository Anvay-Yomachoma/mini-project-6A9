const mysql =  require('mysql2');

module.exports = mysql.createConnection({
    host : 'localhost',
    user : 'test',
    password : 'pass', // Enter the password here
    database : 'ProjectRepo'
});