import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "auth-db1672.hstgr.io", // Hostinger database host
  user: "u705882267_metaedschool", // Your database username
  password: "@Dmin_907853", // Your database password
  database: "u705882267_metaedschool", // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;
