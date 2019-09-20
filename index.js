var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose')
var port = process.env.PORT || 5000
var dbconfig = require('./config/DbConfig')

mongoose.connect(dbconfig.mongoURL,{
    useNewUrlParser:true
}).then(() => console.log('connect mongodb'))
.catch(err => console.log(err));

app.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    extended:true,
    limit: '50mb'
}));

app.listen(port,function(){
    console.log("Server started on port "+ port)
});