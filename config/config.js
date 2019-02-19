module.exports = {
  "development": {
    "username": process.env.MYSQL_UN,
    "password": process.env.MYSQL_PW,
    "database": process.env.MYSQL_DB,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.JAWSDB_UN,
    "password": process.env.JAWSDB_PW,
    "database": process.env.JAWSDB_DB,
    "host": process.env.JAWSDB_HOST,
    "dialect": "mysql"
  }
}
