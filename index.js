
import { collection } from "./src/mongo"
import express from ("express")
import cors from ("cors")
import mongoose from ("mongoose")

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get("/", cors(),(req,res)=>{

})
app.get("/", async(req,res)=>{
    const{email,password}=req.body
    try{
        const chec= await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }else{
            res.json(" not exist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})
app.post("/signup", async(res,req)=>{
    const{email,password}=req.body
    const  data={
        email:email,password:password
    }
    try{
        const check = await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("notexist")
    }
})
app.listen(8000,()=>{
    console.log("port connected")
})