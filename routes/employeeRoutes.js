const express =require("express");

const router=express.Router();


const controller=require("../controllers/employeeController");

router.get("/get",(req,res)=>controller.getAll(req,res));

router.delete("/delete/:id",(req,res)=>controller.deleteById(req,res))

router.post("/save",(req,res)=>controller.save(req,res));

router.get("/getById/:id",(req,res)=>controller.getById(req,res))

module.exports=router;