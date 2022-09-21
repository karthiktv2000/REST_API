const express=require('express');
const mongoose=require('mongoose');
const app=express()
app.use(express.urlencoded({extended:true}))
const port=3000;
app.use(express.json());

require("./db/db");
const abc=require("./models/login");


app.post("/add",(req,res)=>{
    const a=new abc(req.body);
    console.log(req.body);
    a.save().then(()=>console.log("created successfully"));
    res.status(201).send(a)
});

app.get("/all_users",async(req,res)=>{
    const users=await abc.find({});
    res.status(200).send(users)
});

app.delete("/delete/:email",async(req,res)=>{
    const t=req.params.email
    const b=await abc.findOneAndRemove({'email':t})
    res.send('User Deleted successfuly')
});

app.get('/update',(req,res)=>{
    res.sendFile(__dirname+"/update.html")
})

app.post('/update_details',async (req,res)=>{
    const mail=req.body.email;
    console.log(mail);
    console.log(req.body.fname);
    abc.findOneAndUpdate({email:mail},{$set:{name:req.body.fname,phonenumber:req.body.phonenumber,place:req.body.place}},{new:true},(err,data)=>{
        if(data==null){
            res.send(`user with email ${mail} not found in database`)
        }
        else{
            res.send(data)
        }
    })
})

app.listen(3000,console.log("the server is running at port number 3000"));