var mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    id:{
       type: Number,
       required:true
    },
    firstname: {
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
    age: Number,
    mobile : 
    { type:String,
      required:true
    }
})

module.exports = mongoose.model("user",userSchema);