const express = require("express")
const app = express();

const bodyParser = require("body-parser")
app.use(express.urlencoded({extended: true}))

app.get("/",(req,res)=>{
res.sendFile(__dirname + "/index2.html")
})

app.post("/",function(req,res){
    var n1 = Number(req.body.num1) // Number() is did type casting
    var n2 = Number(req.body.num2)
    var result = n1+n2;
    console.log(`Sum is ${result}`);
})

app.listen(4000,function(){
    console.log("Server is running on port 4000");
    
})