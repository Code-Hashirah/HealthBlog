const db = require('../../database/connect');
exports.postBlog=(req,res)=>{
    db.execute("SELECT * FROM blogs")
    .then(result=>{
        res.render('./index', {Writings:result[0]});
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.writeBlog=(req,res)=>{
    const {title, post, image}=req.body;
    db.execute('INSERT INTO blogs(title, post, image) VALUES(?,?,?', [title, post, image]).then(result=>{
        res.redirect(302, '/');
    })
        .catch(err=>{
            console.log(err)
        })
   
    
    }

    exports.postArticle=(req, res)=>{
        res.render('./post')
    }