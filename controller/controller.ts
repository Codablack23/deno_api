import { Snacks } from './../models/models.ts';
import {Response,Request} from "https://deno.land/x/denoot/mod.ts";
import { v4 } from "https://deno.land/std@0.97.0/uuid/mod.ts";

const snack:any[]=[
    {id:1,snack:"bread",price:60},
    {id:2,snack:"sussage row",price:50},
    {id:3,snack:"meatpie",price:150},
    {id:5,snack:"fishpie",price:150},
    {id:4,snack:"burger",price:250},
    {id:6,snack:"burito",price:300}

]

export const getAllSnacks=(req:Request,res:Response)=>{
      res.send(snack).end()
}

export const getSnack=(req:Request,res:Response)=>{
    const id=req.params.get('id')!
   if(id.error){
      res.send('An Error_Occured').end()
   }else{
    const single_snack = snack.find((snack)=>snack.id==id.parsed)
    if(single_snack){
        res.send(single_snack).end()
    }
    res.send({
        status:'Not Found',
        message:'Snack Does Not Exist'
    }).end()
   
   }
}

export const addSnack= async(req:Request,res:Response)=>{
  
   const new_snack = await req.body;

   if(new_snack){
       snack.push(new_snack)
       res.send({
           status:"ok",
           new_snack
       }).end()
   }
   else{
    res.send({
        status:"error",
        message:"it seems your Request could not be processed"
    }).end()
   }
}

export const removeSnack=(req:Request,res:Response)=>{
    const id=req.params.get('id')!
   if(id.error){
      res.send('An Error_Occured').end()
   }else{
    const single_snack = snack.filter((snack)=>snack.id!==id.parsed)
    if(single_snack){
        res.send({
            status:'ok',
            message:"success",
            single_snack
        }).end()
    }
    res.send({
        status:'Not Found',
        message:'Snack Does Not Exist'
    }).end()
   
   }
}