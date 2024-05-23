const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const app=express()
app.use(cors())
app.use(express.json())


const {userModel}=require("./modules/user")
mongoose.connect("mongodb://localhost:27017/USERDATABASE")
.then(console.log("the server is connected successfully to the database"))
const port=process.env.PORT||3000

app.post("/register",(req,res)=>{
    userModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})


app.post("/login",(req,res)=>{
    const{email,password}=req.body
    userModel.findOne({email})
    .then((user)=>{
        if(user){
        if(user.password===password){
            res.json("success")
        }
        else{
            res.json("the password is incorrect")
        }
    }
    else{
        res.json("the user is not existed")
    }
    })
})



app.listen(port,()=>{
    console.log(`the server is running in port ${port}`)
})