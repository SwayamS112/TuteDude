const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.use(express.static("public"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("home") // rendering the home page from this
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.listen(4000,function(){
    console.log("Running on port 4000");
})