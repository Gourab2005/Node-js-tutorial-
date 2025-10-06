import express from "express";
import { authorize } from "../middlewares/authorize.js";
import { getprofile } from "../controllers/usercontroller.js";

export const userrouter = express.Router();

userrouter.get('/profile',authorize,getprofile);