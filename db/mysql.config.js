const mysql = require('mysql2')

const dbconn = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "masood$1",
    database: "employee_management"

}).promise()

module.exports = dbconn