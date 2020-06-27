const mongoose= require('mongoose')



const userSchema =new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email: {
            type:String,
            reqired:true
    },
    phone:{
        type:String,
        required:true
    },

    domain:{
        type:String,
        required:true
    },
    
    createdAt:{
        type:Date,
        default : Date.now
    },
})


  
  module.exports = mongoose.model('User', userSchema)