const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const homeRouter = require('./routers/homeRouter')
const port = process.env.port || 8081;

const app = express();

//db connection
mongoose.connect('mongodb://localhost:27017/studentsdata',{useNewUrlParser:true})
const db = mongoose.connection;
db.on("error",()=>{console.log("error in connection");})
db.once('open',() =>{console.log("Connected");})

app.set('view engine','ejs')
app.use(express.static('public'))
app.use('/',homeRouter)


app.listen(port)