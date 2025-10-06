import express from "express"
import { configDotenv } from "dotenv";
import { authrouter } from "./routes/auth.js";
import { connectdb } from "./config/connectdb.js";
import { userrouter } from "./routes/userroutes.js";
const app = express()

//config
configDotenv();
connectdb();

//middlewares
app.use(express.json());
app.use(express.urlencoded());

//routes
app.use('/auth',authrouter);
app.use('/user',userrouter)

app.get('/',(req,res)=>{
    res.send("Server running correctly!");
})

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

