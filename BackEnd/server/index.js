// server/index.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');


const PORT = process.env.PORT || 3001;
const mongoURL = 'mongodb+srv://fynii:Mongo123@cluster0.6ofh0.mongodb.net/Fynii?retryWrites=true&w=majority';
const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.send({ message: "Hello from server!" + req.body.name});
});

app.use(express.json({
  type: ['application/json', 'text/plain']
}))


mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true 
});
mongoose.connection.on('connected',()=>{
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error',(err)=>{
  console.error('Error to mongo instance',err); 
});

const User = mongoose.model('users', {
  userID : {type: Number},
  username : { type: String},
  email: { type: String},
  number: { type: String},
  birthday: {type: Date},
  password: { type: String },
  college_school : {type: String},
  you_are: {type:String},
  education_level: {type:String},
  looking_for: {type:String},
  carObj: {type:String},
  UserId: {type: String}
});


app.post("/insertuser", (req, res) => {
  User.find(
    {
      "email":{"$eq":req.body.email}
    }
  ).then(function(results){
    if(results.length === 0) {
      User.insertMany([
        { username : req.body.username,
        email: req.body.email,
        number: req.body.number,
        birthday: req.body.birthday,
        password: req.body.password,
        college_school : req.body.college_school,
        you_are: req.body.you_are,
        education_level: req.body.education_level,
        looking_for: req.body.looking_for,
        carObj: req.body.carObj}
      ]).then(function(){
        console.log("Data inserted")  // Success
        res.send(["true",req.body.email])
      }).catch(function(error){
        console.log(error)      // Failure
        res.send(["false"])
      });
    }
    else {
      res.send("0")
    }
  });
});




app.post("/checklogin", (req, res) => {
  User.find(
    {$and:[
      {"email":{"$eq":req.body.email}},
      {"password":{"$eq":req.body.password}}
    ]}
  ).then(function(results) {
    if (results.length >= 1) {
      res.json(["1",results[0].username]);
    } else {
      res.json(["2"])
    }
  });
});

app.post("/getprofileData",(req,res) => {
  User.find(
    {
      "username":{"$eq":req.body.username}
    }
  ).then(function(results){
    res.send(results[0])
  });
});