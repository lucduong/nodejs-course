const Sequelize = require('sequelize')
const path = require('path')

process.env.DATABASE_URI = 'mysql://nodejs_section4:NodeJs123789!@localhost:3306/nodejs_section4'
const sequelize = new Sequelize(process.env.DATABASE_URI)

console.log(__dirname)
const User = sequelize.import(path.join(__dirname, 'User.js'))

const db = {}
db.User = User
db.sequelize = sequelize

module.exports = db
