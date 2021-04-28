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
