const express=require("express");
const router =express.router();
const path=require('path');

let reqPath=path.join(__dirname+'../');
console.log('path',);
router.use(express.static(reqPath));


//Get

router.get("/",(req,res)=>{
    res.status(200).json({
        message:"GET - SUCCESS",
        metadata:{
            hostname: req.hostname,
            method: req.method
        },
    });
});
//Get by Id

router.get("/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).json({
        message:"GET - SUCCESS",
        id: id,
        metadata:{
            hostname: req.hostname,
            method: req.method
        },
    });
});

//Put by id Method
router.put("/id:",(req,res)=>{
    const id=req.params.id;
});
//Delete Method

router.delete('/:id',(req,res)=>{
    const id=req.params.id;
    message: "${id}  deleted"
});
//Post Method
router.post('/users',(req,res)=>{
    const user ={
    id: ++userIdCounter,
    name: req.body.name
    }
    users.push(user)
    res.status(201).json(user)
});
module.exports= router;