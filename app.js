const htt=require('http')
const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser= require('body-parser')
const app= express();
const adminRoute=require('./routes/admin');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(adminRoute);
app.listen(3010)