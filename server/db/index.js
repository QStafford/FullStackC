const mysql = require('mysql')

const pool = mysql.createPool({
    user: '',
    password: '',
    host: '',
    port: '',
    database: ''
});

let chirprdb = {}

chirprdb.all = () => {
    return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM chirps', (err, results) => {
                if (err) {
                    return reject(err);
            } return resolve(results);
        })
    })
}

module.exports = chirprdb