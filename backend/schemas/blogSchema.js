const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

   heading:{
        type:String,
        default:'Unknown User',
        required:true
    },
    text:{

        type:String,
        required:true
       

    },
    author:{
        type:String,
        required:true,

    },
    author_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true

    },
    category:{
      
        type:Array,
        required:true,
        default:['General / Random']
    }

},{
    timestamps:true   // to add creation time in blog automatically
})

module.exports = mongoose.model('Blogs',blogSchema)