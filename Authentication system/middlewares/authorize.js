import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";
configDotenv();

const authorize = (req,res,next)=>{
    const token = req.headers.authorization;
    console.log(token)
    if(!token){
        res.json({message:"Invalid token!"})
        return;
    }
    let decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = decoded;
    next()
}

export {authorize}