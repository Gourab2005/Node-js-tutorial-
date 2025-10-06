import mongoose from "mongoose";

const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},
{
    timestamps:true
})

export const User = mongoose.model("User",userschema);





