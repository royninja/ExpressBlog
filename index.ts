import express,{Express,Request,Response} from "express";
import path from "path";

const app : Express = express();
const port = 9000;

app.get("/",(req : Request,res : Response) =>{
    //res.send("<h1>Home</h1>");
    res.sendFile(path.join(__dirname,"../index.html"));
    
});

app.get("/about",(req : Request,res : Response) =>{
    res.send("<h2>About</h2>");
});

app.listen(port,()=>{
    console.log(`Running on port : ${port}`);
});