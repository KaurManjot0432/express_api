import express from "express";
import pkg from "body-parser";
const { json, urlencoded } = pkg;

export const app = express();

app.use(json());
app.use(urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.send("HYY!!");
})

app.post('/',(req,res)=>{
    res.send({message : "ok"});
})

export const start = () => {
    app.listen(3000, ()=>{
        console.log("Server is up on port 3000");
    })
}