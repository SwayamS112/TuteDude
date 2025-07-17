const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))//css files inside public folder

var ex = "Working"
var items=[];

app.get("/",(req,res)=>{
    res.render("list",{ejes: items})
})

app.post("/",function(req,res){
    console.log(req.body.elel); //what ever i add in todo list will show on console
    var item = req.body.elel;
    items.push(item);
    res.redirect("/");
})

app.listen(8000,function(){
    console.log("Server is started on 8000");
    
})