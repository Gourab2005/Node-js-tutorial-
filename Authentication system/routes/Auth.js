import express from "express"
import { Signup,Login } from "../controllers/authcontroller.js";

export const authrouter = express.Router();

authrouter.post('/signup',Signup);
authrouter.post('/login',Login);

