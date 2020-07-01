const express=require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
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

router.post('/contact', (req, res) => {


     let newdata=new User({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      domain:req.body.domain,
  })
  
  if (phone.length == 10) {
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
  
}else{
  res.sendStatus(400).json({
    error:err

})
}
  console.log(newdata)
  
  
 
})


  const PORT = process.env.PORT || 5000;

router.listen(PORT, console.log(`Server started on port ${PORT}`));
