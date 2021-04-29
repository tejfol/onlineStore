const { DB_HOST, DB_USERNAME, DB_PASSWORD, DATABASE } = process.env;

module.exports = {
    "development": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DATABASE,
        "host": DB_HOST,
        "dialect": "postgres",
    },
    "test": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DATABASE,
        "host": DB_HOST,
        "dialect": "postgres",
    },
    "production": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DATABASE,
        "host": DB_HOST,
        "native": true,
        "ssl": false,
        "dialect": "postgres",
        "dialectOptions": {
            "ssl": {
              "require": true,
              "rejectUnauthorized": false 
            }
          },
        
    },
};
