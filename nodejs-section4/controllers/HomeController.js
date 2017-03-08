const UserService = require('../services/UserService')

const getIndexView = (req, res) => {
  const model = {
    user: {
      username: 'lucduong',
      email: 'luc@ltv.vn'
    },
    title: 'HomePage'
  }
  res.render('home', model)
}

const getContactView = (req, res) => {
  res.render('contact')
}

const getAddUserView = (req, res) => {
  res.render('add-user')
}

const postAddUser = (req, res) => {
  const username = req.body.username
  const email = req.body.email

  UserService.addUser(username, email)
    .then((user) => {
      console.log(`Added 1 user: `, user)
      res.redirect('/users')
    })
}

const getUserListView = (req, res) => {
  UserService.getUserList()
    .then((users) => {
      console.log(`Users List: `, users)
      res.render('user-list', {
        users: users
      })
    })
}

module.exports = {
  getIndexView,
  getContactView,
  getAddUserView,
  postAddUser,
  getUserListView,
}
