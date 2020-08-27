var mongoose=require('mongoose'); 
var config=require("./library/config");
module.exports.connect =(cb)=>{
    var options={ useUnifiedTopology: true, useNewUrlParser: true,  useCreateIndex: true,
    };
    mongoose.connect('mongodb+srv://nikhil_mohan:nikhilmongo@cluster0.ooac4.mongodb.net/user?retryWrites=true&w=majority',options,(err)=>{
               if(err)
               console.log("ERROR"+err.message);
               else
              cb("DB CONNECTED");
    }); 
}
module.exports.disconnect=()=>{
    mongoose.disconnect(()=>{
        console.log("Disconnected Succesfully!!");
    })
}