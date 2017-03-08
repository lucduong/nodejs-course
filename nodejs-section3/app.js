/**
 * Express Framwork
 */

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const dotenv = require('dotenv')

const router = require('./routes/routes')
const apiRouter = require('./routes/api-routes')

const app = express()
const port = 8080
const NODE_ENV = process.env.NODE_ENV || 'development'

global.users = [
  { username: 'lucduong', email: 'luc@ltv.vn' },
  { username: 'sonle', email: 'son.le@dounets.com' }
]

if (NODE_ENV == 'development') {
  console.log(`NODE_ENV: ${NODE_ENV}`)
  dotenv.load({ path: path.join(__dirname, '.env') })
}

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 315360000 }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)
app.use('/api', apiRouter)

const db = require('./models');
db.sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
  });
