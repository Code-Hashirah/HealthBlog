const express =require('express');
const fs=require('fs');
const path = require('path');
const router=express.Router();
const userDataBase=path.join(__dirname, '..', 'database', 'user.json');
const postDataBase=path.join(__dirname, '..', 'database', 'post.json');
const commentDataBase=path.join(__dirname, '..', 'database', 'comment.json');

router.get('/', (req,res)=>{
    fs.readFile(postDataBase, (err,post)=>{
        if(!err){
            let Blogs=JSON.parse(post);
            res.render('index',{Writings:Blogs});
        }
    })
})



module.exports=router;