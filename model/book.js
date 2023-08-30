const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    title:String,
    author:String,
    publication:Date,
    genre:String
})

const bookmodel= new mongoose.model('book',schema)

module.exports=bookmodel