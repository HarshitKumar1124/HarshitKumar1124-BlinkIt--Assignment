const express = require('express')
const router = express.Router()


const {createUser,loginUser,logoutUser,loadUser} = require('../controllers/userControllers.js')

const {IsAuthenticate} = require('../middleware/authentication.js')


router.post('/new/user',createUser);

router.post('/login/user',loginUser);

router.post('/logout/user',IsAuthenticate,logoutUser);

router.get('/load/user',IsAuthenticate,loadUser)

module.exports = router;