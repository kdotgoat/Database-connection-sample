var mysql = require("mysql2");
var connection = mysql.createConnection({
host:`localhost`,
database:`employee_database`,
user:`root`,
password:`Wi0797563115#`
});

module.exports = connection;