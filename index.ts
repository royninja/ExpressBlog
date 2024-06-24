import express,{Express,Request,Response} from "express";

const app : Express = express();
const port = 9000;

app.get("/",(req,res) =>{
    res.send("Hi");
});