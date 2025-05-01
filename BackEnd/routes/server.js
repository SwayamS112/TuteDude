const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Hello ! welcome to my webpage");
});

app.get("/html",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/home",(req,res)=>{
    res.send("this is home route");
}); 

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})