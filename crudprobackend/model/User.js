// let mongo = require("mongoose");
// let sch= new mongo.Schema({
//     name:String , phone:String , Age:String , email:String
// });
// let  model = mongo.model("MyFirstTry", sch) 

// module.exports= model   

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  Age: String,
});

module.exports = mongoose.model("MyFirstTry", userSchema);