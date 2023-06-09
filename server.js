const express = require("express");
const bodyParser = require("body-parser")
// New app using express module
const mongoose = require('mongoose');
var db = mongoose.connect("mongodb+srv://Manav:Manavdshah@cluster0.o0oi3vk.mongodb.net/", { useNewURLParser: true });

const messageschema = new mongoose.Schema({
    name:
    {
        type: String
    },
    email:{type:String},
    subject:{type:String},
    message:{type:String}
});
const messages = mongoose.model("message",messageschema);


const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));

app.post("/api", async function(req, res) {
    console.log(req.body);
    temp = messages(req.body);
    try{
        const user = await messages.create(temp);
        console.log('Added');
        return res.status(200).send('Message Recieved');

    }
    catch(err)
    {
        console.log('error');
        return res.status(400).send('error');
    }
  });




app.listen(3000, function(){
    console.log("server is running on port 3000");
  })