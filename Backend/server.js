const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors=require('cors')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '8096',
  database: 'BDMS',
  insecureAuth : true
});

app.use(express.json())
app.use(cors())
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

app.get("/show",(req,res)=>{
  const iddonar=req.params.iddonar;
  console.log(iddonar);
  const q= `select * from  donar where iddoner=?`
  db.query(q,[iddonar],(err,data)=>{
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
    const { Name,Gender,Age,Mobile,Email,Blood_group,Address}=req.body
    const q=`INSERT INTO donar(Name,Gender,Age,Mobile,Email,Blood_group,Address) values(?)`;
    db.query(q,[[Name,Gender,Age,Mobile,Email,Blood_group,Address]],(err,result)=>{
        if (err) {
            console.error('Database error: ' + err);
            res.status(500).json({ success: false, message: 'Donar Added Failed' });
          } else {
            res.json({ success: true, message: 'Donar Added Successfully' });
          }
    })
})
app.post("/patient",(req,res)=>{
  const { Name,Gender,Age,Mobile,Purpose,Email,Blood_group,Address}=req.body
  const q=`INSERT INTO patient(Name,Gender,Age,Mobile,Purpose,Email,Blood_group,Address) values(?)`;
  db.query(q,[[Name,Gender,Age,Mobile,Purpose,Email,Blood_group,Address]],(err,result)=>{
      if (err) {
          console.error('Database error: ' + err);
          res.status(500).json({ success: false, message: 'Patient Added Failed' });
        } else {
          res.json({ success: true, message: 'Patient Added Successfully' });
        }
  })
})
app.put("/update/:iddonar",(req,res)=>{
  const { Name,Gender,Age,Mobile,Email,Blood_group,Address}=req.body
  const iddonar=req.body.iddonar;
  const q=`update donar set Name= ?, Gender=?, Age=?, Mobile=?, Email=?, Blood_group=?, Address=?, where iddonar=?`;
  db.query(q,[[Name,Gender,Age,Mobile,Email,Blood_group,Address],iddonar],(err,result)=>{
      if (err) {
          console.error('Database error: ' + err);
          res.status(500).json({ success: false, message: 'Donar Added Failed' });
        } else {
          res.json({ success: true, message: 'Donar Added Successfully' });
        }
  })
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
