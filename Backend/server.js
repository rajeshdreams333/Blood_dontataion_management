const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '8096',
  database: 'BDMS',
  insecureAuth : true
});

app.use(express.json())
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});
app.get("/donar",(req,res)=>{
    const q= "select * from  donar"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/patient",(req,res)=>{
    const q= "select * from patient"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.post("/donar",(req,res)=>{
    const q="INSERT INTO donar (`Donar_Name`,`Blood_Group`,`Contact_Number`) values(?)"
    const values=[
        req.body.Donar_Name,
        req.body.Blood_Group,
        req.body.Contact_Number
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Donar data added Successfully....");
    })
})
app.post("/patient",(req,res)=>{
    const q="INSERT INTO patient (`Name`,`Purpose`,`Contact_Number`) values(?)"
    const values=[
        req.body.Name,
        req.body.Purpose,
        req.body.Contact_Number
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Patient data added Successfully....");
    })
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
