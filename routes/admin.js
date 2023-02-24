// const express =require('express');
const router=require('express').Router();
const adminUserController = require('../controller/admin/blogs')

// index route 
router.get('/', adminUserController.postBlog )

router.get('/Post-Article', adminUserController.postArticle)
 
router.post('/post-Article', adminUserController.writeBlog)

router.get('/post-topic/:id',adminUserController.readArticle)

module.exports=router;