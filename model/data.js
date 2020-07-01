const mongoose= require('mongoose')
var validator = require('validator')



const userSchema =new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email: {
            type:String,
            reqired:true,
            validate(user) {
                if (!validator.isEmail(user)) {
                    throw new Error('invalid email')
                }
    }
},
    phone:{
        type:String,
        required:true,
        maxlength: 10,
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