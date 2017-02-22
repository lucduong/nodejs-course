const _fetchUsers = () => {
  return global.users;
}

const _addUser = (user) => {
  global.users.push(user)
  return user
}

const _getUser = (req, res) => {
  const usrNm = req.params.username
  const users = global.users
  let user = undefined
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == usrNm) {
      user = users[i]
    }
  }

  if (user) {
    res.status(200)
      .json(user)
  } else {
    res.status(400)
      .json({
        message: `Could not found the user who has username ${usrNm}`
      })
  }
}

const _getUsers = (req, res) => {
  const sort = req.query.sort
  console.log(`query -> sort: ${sort}`)
  const model = {
    users: _fetchUsers()
  }
  res.status(200)
    .json(model)
}

const _createUser = (req, res) => {
  //req.body
  const user = req.body.user

  console.log(`You've created new user `, user)

  res.status(200)
    .json(user)
}

exports.getUsers = _getUsers
exports.createUser = _createUser
exports.getUser = _getUser
