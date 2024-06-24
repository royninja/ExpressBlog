import express,{Express,Request,Response} from "express";

const app : Express = express();
const port = 9000;

app.get("/",(req : Request,res : Response) =>{
    res.send("<h1>Home</h1>");
});

app.get("/about",(req : Request,res : Response) =>{
    res.send("<h2>About</h2>");
});

app.listen(port,()=>{
    console.log(`Running on port : ${port}`);
});