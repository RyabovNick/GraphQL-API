const mysql = require("mysql");

let pool = mysql.createPool({
  connectionLimit: 1000,
  host: "unidb.ru",
  port: 6606,
  user: "reader",
  password: "123456",
  database: "students"
});

export default pool;
