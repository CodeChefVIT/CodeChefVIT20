const express=require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
var captcha=require('../middleware/captcha')
var validator = require('validator')
const User = require('./model/data');

const cors=require('cors')
require('dotenv').config()


const router=express();

router.use(bodyParser.json());
router.use(cors())

//connect to mongodb

mongoose.connect(process.env.MONGODB,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
})


// var bigError1 = []
router.post('/contact', captcha,(req, res) => {

     let newdata=new User({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      domain:req.body.domain,
  }) 
  
//   bigError1 = []
//   let errors = []
//   if (phone.length != 10) {
//       errors.push({
//           text: "Invalid phone number"
//       })
//   }
//   if (!validator.isEmail(email)) {
//       errors.push({
//           text: "Invalid email"
//       })
//   }
  
//   if (errors.length > 0) {
//     bigError1 = errors
    
//     res.sendStatus(400).json({
//       error:errors
//     })
// } else {
 
    newdata.save((err,success)=>{
      if(err)
      {
          res.sendStatus(400).json({
              error:err
       
          })
      }
      else{
        res.status(201).json({message:"Thanks for contacting"})
      }
    })
  console.log(newdata)
  
  
  })
// })



  const PORT = process.env.PORT || 5000;

router.listen(PORT, console.log(`Server started on port ${PORT}`));
