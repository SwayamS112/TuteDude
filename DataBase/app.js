//BASIC SETUP
const mongo = require("mongoose")
mongo.connect("mongodb://localhost:27017/Data")

const fruitSchema = new mongo.Schema({
    name:{
        type:String,
        required:[true,"Enter the name of fruit"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    }
});

const item = mongo.model("First",fruitSchema); // collection name first second is name of schema

                          //this will throw 2 error due to rating range and name 
                          // validation failed
// const element = new item({
//     rating: 35
// });

const element1 = new item({
    name:"Banana",
    rating:1
})

const element2 = new item({
    name:"mango",
    rating: 10
});
const element3 = new item({
    name:"litchi",
    rating: 2
});


//to insert the elements 
// item.insertMany([element1,element2, element3]) // removed element due to validation errer
//   .then(() => {
//     console.log("Inserted!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//to check the elements inside the collection
// item.find()
//   .then((item) => {
//     console.log(item);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//  To print a specific name or any data inside the object of the element
//  using for each loop
// item.find()
//   .then((data) => {
//     data.forEach(function(item){
//         console.log("Full Document:", item);
//         console.log(item.name);        
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// to delete an element
// item.deleteOne({name:"litchi"})
// .then((item)=>{
//     console.log(`item deleted`);
// })
// .catch((err)=>{
//     console.log(err);    
// })

// update the elements
item.updateOne(
    {_id:'681b06fb4ae779392bd8ff71'},
    {rating: 6}
)
.then((item)=>{
    console.log("Item replaced");
})
.catch((err)=>{
    console.log(err);
})