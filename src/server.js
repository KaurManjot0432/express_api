import express from "express";
import pkg from "body-parser";
const { json, urlencoded } = pkg;
import morgan from "morgan";
import { connect } from './config/database.js';
import blogRouter from "./blog/blog-routes.js";
import userRouter from "./user/user-routes.js";


export const app = express();
const router = express.Router();

//////middlewares/////
app.use(json());
app.use(urlencoded({extended:true}));
app.use(morgan('dev'));

///our own middleware

const logger = (req,res,next)=>{
    console.log("Logging...");
    // throw new Error("error");
    next();
}

/////////////////


// router.get('/', (req,res)=>{
//     res.send({message:"ok get"});
// })

// router.post('/', (req,res)=>{
//     res.send({message:"ok post"});
// })
// router.route('/')
//     .get((req,res)=>{
//         res.send({message:"ok get"});
//     })
//     .post((req,res)=>{
//         res.send({message:"ok post"});
//     })
// app.use('/users', router);


//logger for a particular req
// app.get('/', logger, (req,res)=>{
//     res.send("HYY!!");
// })

// app.get('/', [logger,logger], (req,res)=>{
//     res.send("HYY!!");
// })


// app.get('/', (req,res)=>{
//     res.send("HYY!!");
//     //if we want to run some other func then we can use next()
// })

// app.post('/',(req,res)=>{
//     res.send({message : "ok"});
// })

app.use('/api/blog',blogRouter);
app.use('/api/user',userRouter);


export const start = () => {
    app.listen(3000, ()=>{
        connect();
        console.log("Server is up on port 3000");
    })
}