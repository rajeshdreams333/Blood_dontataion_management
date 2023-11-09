import  express  from "express";

import  mysql, {createConnection }from "mysql";

const app=express()

const db=mysql.createConnection({
    host:"RAJESHDREAMS333",
    username:"root",
    password:"8096",
    database:"test"
})
app.get('/',(req,res)=>{
    res.json("Hello this is backend......")
})
app.listen(8800,()=>{
    console.log("Connect to Backend....!");
})