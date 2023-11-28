// WE MAKE CONNECTION TO OUR DB
const {Sequelize, DataTypes} = require("sequelize")
const CONFIG = require("../config/dbConfig")
const bookModel = require("./book")

const sequelize = new Sequelize (
    CONFIG.DB_NAME,
    CONFIG.DB_USER,
    '!@#alada123#',
    {
        host: CONFIG.DB_HOST,
        dialect: CONFIG.DB_DIALECT
    }
)


sequelize.authenticate()
    .then(() => {
        console.log("Connected Successfully")
    }).catch((err) => {
        console.log(err)
    })

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

//Add our models
db.books = bookModel(sequelize, DataTypes);
// Add more models

// Force = False, Db won't be clear after every refresh
db.sequelize.sync({force: false})
    .then(() => {
        console.log("table sync successfully")
    }).catch((err) => {
        console.log(err)
    })

module.exports = db