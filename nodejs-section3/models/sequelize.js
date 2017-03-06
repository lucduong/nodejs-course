const Sequelize = require('sequelize')
const path = require('path')

const sequelize = new Sequelize(process.env.DATABASE_URI)

console.log(__dirname)
const User = sequelize.import(path.join(__dirname, 'User.js'))

const db = {}
db.User = User
db.sequelize = sequelize

module.exports = db
