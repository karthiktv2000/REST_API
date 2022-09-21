const mongoose=require('mongoose')
const details=mongoose.model("login_details",{
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        required:true
    }

})
module.exports=details;