const mysql = require('mysql');

// buat konfigurasi koneksi
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music_player',
    multipleStatements: true
});

// connection database
connection.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected!');
});

module.exports = connection;
