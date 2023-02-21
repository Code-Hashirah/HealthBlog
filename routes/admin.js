const express =require('express');
const router=require('express').Router();
const adminUserController = require('../controller/admin/blogs')
// const userDataBase=path.join(__dirname, '..', 'database', 'user.json');
// const postDataBase=path.join(__dirname, '..', 'database', 'post.json');
// const commentDataBase=path.join(__dirname, '..', 'database', 'comment.json');
 
// index route 
router.get('/',adminUserController.postBlog )

router.get('/Post-Article',adminUserController.postArticle)
 
router.post('/post-Article',adminUserController.writeBlog)


module.exports=router;