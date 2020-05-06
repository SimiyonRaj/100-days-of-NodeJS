module.exports = {
  development: {
    host: process.env.DEV_DATABASE_HOST,
    database: process.env.DEV_DATABASE_DB,
    username: process.env.DEV_DATABASE_UNAME,
    password: process.env.DEV_DATABASE_PWD,
    dialect: 'postgres',
  },
  test: {
    host: process.env.TEST_DATABASE_HOST,
    database: process.env.TEST_DATABASE_DB,
    username: process.env.TEST_DATABASE_UNAME,
    password: process.env.TEST_DATABASE_PWD,
    dialect: 'postgres',
  },
  production: {
    host: process.env.PROD_DATABASE_HOST,
    database: process.env.PROD_DATABASE_DB,
    username: process.env.PROD_DATABASE_UNAME,
    password: process.env.PROD_DATABASE_PWD,
    dialect: 'postgres',
  },
}