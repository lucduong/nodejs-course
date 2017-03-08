const User = require('../models').User

const addUser = (username, email) => {
  return User.create({
    username: username,
    email: email,
  })
}

const getUserList = () => {
  return User.findAll({
    where: {
      username: 'lucduong',
      email: 'luc@ltv.vn'
    }
  })
}

module.exports = {
  addUser,
  getUserList,
}
