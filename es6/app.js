const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.set("view engine","ejs");
var d = new Date();
var day = d.getDay();
var dayText = "";

app.get("/",(req,res)=>{
if(day == 0)
    res.send("Day is sunday");
if(day == 1)
    res.send("Day is monday");
if(day == 2)
    res.send("Day is tueday");
if(day == 3)
    res.send("Day is wendness");
if(day == 4)
    res.send("Day is thrusday");
if(day == 5)
    res.send("Day is friday");
else{
    res.send("Day is saturday")
}
})

app.get("/day",(req,res)=>{
    
if(day==6 || day==0)
    dayText = "WeekEnd";
else
dayText = "Weekday";
return res.render("list",{dayej:dayText})

})


app.listen(3000,function(){
    console.log("Running");
})