const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 5002;
const app = express()
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017",function(err,client){
   if (err) {
    console.log("1. error :", err)
    return 
   }
   const db = client.db('kennel')
   const collection = db.collection('dogs')
   collection.insertOne({name: 'Roger'}, (err, result) => {
    if (err) {
      console.log("2. error :", err)
      return 
    }
    console.log("susess !! ", result)
    client.close()
  })
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
