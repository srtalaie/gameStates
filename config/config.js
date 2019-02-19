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
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
