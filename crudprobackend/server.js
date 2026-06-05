// let express = require ("express")
// let mongoose = require("mongoose");
// const db = require('./model/User')
// let cors = require("cors")
// mongoose.connect("mongodb://localhost:27017/WelcomeTo")

// const app= express();

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(cors())

// app.post("/add", async(req,res)=>{
//     let name=req.body.name;
//     let pass=req.body.pass;
//     let email= req.body.email;

//     console.log(name);
//     console.log(pass);
//     console.log(email);
 
//    let ans= await  data({
//     name:name, pass:pass,email:email
//     })
//     ans.save() 
// })

// app.get ("/read" , async (req,res)=>{
//     let readed = await data.find();
//     res.send(readed)
// })

// app.put("update" , async (req,res)=>{
//     let id=req.body.name;
//     let newname=req.body.name;
//     await data.findById(id,(err,updated)=>{
//         updated.name=newname;
//         updated.save();
//     })
// })




// app.listen(3000)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./model/User");

const app = express();

mongoose
  .connect("mongodb://jawahar:0M72fUf5VVLBNHo9@ac-qvtrshi-shard-00-00.iek0f28.mongodb.net:27017,ac-qvtrshi-shard-00-01.iek0f28.mongodb.net:27017,ac-qvtrshi-shard-00-02.iek0f28.mongodb.net:27017/crud?ssl=true&replicaSet=atlas-yvb6oz-shard-0&authSource=admin&appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/add", async (req, res) => {
  try {
    const { name, phone, email, age } = req.body;

    const newUser = new User({
      name,
      phone,
      email,
      Age: age,
    });

    await newUser.save();

    res.send("Data Saved Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error Saving Data");
  }
});

app.get("/read", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error Fetching Data");
  }
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});