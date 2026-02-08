import express from 'express'
import { isInformation } from './validation.js'
import { isTypes } from './validation.js'
import { insert,getAll,sortByTarget,sortByTyme } from './queries.js'
import cors from 'cors'


const app = express()

app.use(cors())

app.use(express.urlencoded({extended:true}))

app.post("/register",async(req,res)=>{
    const body = req.body
    if(!isInformation(["name","code","target","information"],body)){
        res.send("missing information")
    }
    if(!isTypes({"name":"","code":"","target":"","information":""},body)){
        res.send("one or more types not good")
    }
    await insert(body)
    res.send("data add exist")
})

app.get("/all",async(req,res)=>{
    const data = await getAll()
    console.log();
    
    res.json(data)
})

app.put("/sort/tyme",async(req,res)=>{
    await sortByTyme()
})

app.put("sort/target",async(req,res)=>{
    await sortByTarget()
})

app.listen(3000,()=>{
    console.log("server run");
    
})