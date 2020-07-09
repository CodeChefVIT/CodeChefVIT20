const express=require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
var captcha=require('./middleware/captcha')
var validator = require('validator')
const User = require('./model/data');

const cors=require('cors')
require('dotenv').config()

const app=express();
const router=express.Router();


app.use(bodyParser.json());
app.use(cors())

//connect to mongodb

mongoose.connect(process.env.MONGODB,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
})


app.post('/contact',captcha,(req, res) => {

     const newdata=new User({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      domain:req.body.domain,
  }) 
  

 
    newdata.save((err,success)=>{
      if(err)
      {
        console.log(err)
          res.sendStatus(400).json({
              error:err.toString() 
       
          })
      }
      else{
        res.status(201).json({message:"Thanks for contacting"})
      }
    })
  console.log(newdata)


})




  const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
