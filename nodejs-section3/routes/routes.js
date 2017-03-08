const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')

router.get('/', HomeController.getIndexView)
router.get('/contact', HomeController.getContactView)
router.route('/add-user')
  .get(HomeController.getAddUserView)
  .post(HomeController.postAddUser)
router.get('/users', HomeController.getUserListView)

module.exports = router
