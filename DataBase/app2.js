const mongo = require("mongoose")
mongo.connect("mongodb://localhost:27017/Person")

const PersonFruitSchema = new mongo.Schema({
    name:String,
    rating: Number
})

const personSchema = new mongo.Schema({
    name:String,
    age:Number,
    fav:PersonFruitSchema
})

const item2 = mongo.model("FavFruit",PersonFruitSchema);
const item1 = mongo.model("Person",personSchema);

const grapes = new item2({
    name:"Cherry",
    rating:3
});

grapes.save();

const person1 = new item1({
    name:"any",
    age:21,
    fav: grapes
});
person1.save();
