const express=require("express")
const cors=require("cors")

const app=express()
app.use(
  cors({
    origin: [
      "http://localhost:5173",
""
    ],
  })
);


app.use(express.json());
app.use(express.urlencoded({extended:true}))

var email="netflix07@gmail.com"
var password="password07"
app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.post("/login",function(req,res){
    console.log(req.body.email)
    console.log(req.body.password)
    if(req.body.email === email && req.body.password === password){
    res.send("successfull")
}else{
    res.send("invalid email or password")
}})
app.use("/",(res,req)=>{
    res.send("backend is running..")
})

app.listen(5000,function(){
    console.log("server start")
})