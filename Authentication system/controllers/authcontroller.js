import bcrypt from "bcrypt"
import { User } from "../models/usermodel.js";
import jwt from 'jsonwebtoken';
import {configDotenv} from "dotenv"

configDotenv();

const Signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const saltRound = 10;
        const salt = bcrypt.genSaltSync(saltRound);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const user = await User.create({name,email,password:hashedPassword});
        res.status(200).json({message:"user registered successfully!",user});
    } catch (error) {
        res.status(500).json({message:"User creation error!",error});
    }
}

const Login = async(req,res)=>{
    let {email, password}= req.body;
    try {
        const user = await User.findOne({email}).select('-__v -createdAt -updatedAt');
        if(!user){
            res.send({message:"No user found with that email!"});
            return;
        }
        const matched = bcrypt.compareSync(password,user.password);
        
        const token = jwt.sign({ id: user._id, email: user.email },process.env.JWT_SECRET,{ expiresIn: '1h' });

        res.send({user:user,matchresult:matched,secret:token})
        
    } catch (error) {
        res.send({error:error})
    }
}

export { Signup,Login };
