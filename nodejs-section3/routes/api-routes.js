const express = require('express')
const router = express.Router()
const HomeAPIController = require('../controllers/HomeAPIController')

router.route('/users')
  .get(HomeAPIController.getUsers)
  .post(HomeAPIController.createUser)
  // .put(HomeAPIController.updateUser)
  // .delete(HomeAPIController.deleteUser)

  // GET, POST, PUT, DELETE
router.get('/users/:username', HomeAPIController.getUser)

module.exports = router
