require('dotenv').config()

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
    "development": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": "online_store",
        "host": DB_HOST,
        "dialect": "postgres",
    },
    "test": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": "sequelize_database_test",
        "host": DB_HOST,
        "dialect": "postgres",
    },
    "production": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": "sequelize_database_production",
        "host": DB_HOST,
        "dialect": "postgres",
    },
};
