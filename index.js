import express from "express";
import { configDotenv } from "dotenv";

const app = express();

configDotenv();

app.get("/", (req, res)=>{
    res.send('Hello World')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})