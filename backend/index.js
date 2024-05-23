const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const cookieParser=require("cookie-parser")

const app=express()
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST"],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())


const {userModel}=require("./modules/user")
mongoose.connect("mongodb://localhost:27017/USERDATABASE")
.then(console.log("the server is connected successfully to the database"))
const port=process.env.PORT||3000

app.post("/register",(req,res)=>{
    const{name,email,password}=req.body
    bcrypt.hash(password,10)
    .then(hash=>{
        userModel.create({name:email,password:hash})
        // userModel.create({name:name,email:email,password:hash})
        .then(user=>res.json(user))
        .catch(err=>res.json(err))
    })
    .catch(err=>console.log(err.message))
})


app.post("/login",(req,res)=>{
    const{email,password}=req.body
    userModel.findOne({email})
    .then((user)=>{
    if(user){
         bcrypt.compare(password,user.password,(err,response)=>{ 
            if(response){
                const token=jwt.sign({email:user.email},"jwt-secret-key",{expiresIn:"1d"})
                res.cookie("token",token)
                res.json("success")
            }
            else{
                res.json("the password is incorrect")
            }
        })
        }
        else{
            res.json("the user is not existed")
        }
        })
})

const verifyUser=(req,res,next)=>{
    const token=req.cookies.token
   if(!token){
    return res.json("the token was not avaliable")
   }
   else{
    jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
        if(err) return res.json("token is wrong")
        next()
    })
   }
}

app.get("/home",verifyUser,(req,res)=>{
    return res.json("success")
})

app.listen(port,()=>{
    console.log(`the server is running in port ${port}`)
})