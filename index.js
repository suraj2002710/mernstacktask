const express=require('express')
const app=express()
const mongoose=require('mongoose')
const router = require('./routes/routes')
const cors=require("cors")
mongoose.connect('mongodb+srv://surajaheer2002:suraj12345@cluster0.hcq5sxu.mongodb.net/chat?retryWrites=true&w=majority').then((host)=>{
    console.log("mongo connect")
}).catch((err)=>{
    console.log(err)
})
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router)
app.listen(5000,()=>{
    console.log("server started");
})
