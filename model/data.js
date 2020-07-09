const mongoose= require('mongoose')




const userSchema =new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email: {
            type:String,
            required:true,
            match: /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    
},
    phone:{
        type:Number,
        required:true,
        match: /^([7-9][0-9]{9})$/g,
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