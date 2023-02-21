const http=require('http')
const fs = require('fs')
const express = require('express')
const app= express();
const bodyParser= require('body-parser')
const path = require('path')
const adminRoute=require('./routes/admin');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(adminRoute);
app.listen(3006)
