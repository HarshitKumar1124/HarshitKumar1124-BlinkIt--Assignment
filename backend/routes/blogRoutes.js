const express = require('express')
const router = express.Router()

const {createBlog,deleteBlog,getAllBlog,getBlogById} = require('../controllers/blogControllers.js')
const {IsAuthenticate} = require('../middleware/authentication.js')

router.route('/new/blog').post(IsAuthenticate,createBlog);

router.route('/delete/blog/:id').delete(IsAuthenticate,deleteBlog);

router.route('/get/blogs').get(getAllBlog);

router.route('/get/blog/:id').get(getBlogById);


module.exports = router;