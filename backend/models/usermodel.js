var mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
    id:{ type: Number,
         required:true,
         unique:true },
    firstname: {type:String,
        required:true },
    lastname: {type:String,
        required:true },
    age :Number,
    mobile : Number,
    email: { type:String,
             required: true,
             unique:true },
    password: { type:String,
                required: true },
    status : Boolean
})
module.exports = mongoose.model("user",userSchema);