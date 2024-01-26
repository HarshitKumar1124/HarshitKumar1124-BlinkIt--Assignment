const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        default:'Unknown User',
        required:true
    },
    email:{

        type:String,
        required:true
       

    },
    password:{
        type:String,
        required:true,
       

    },
    visible_password:{
        type:String,
        required:true,
      

    },
},{
    timestamps:true   // to add creation time in user automatically
})

module.exports = mongoose.model('Users',userSchema)