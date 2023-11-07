const express = require("express");
const app  = express();
const router = express.Router()

router.get("/rat",(req,res)=>{
    res.send({ data : `rat ${Math.random()}`})
})


router.get("/cat",(req,res)=>{
    res.send({ data : `cat ${Math.random()}`})
})


app.use("/animals",router);
const PORT = 4000;

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`server listening in PORT ${PORT}`)
})