const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
const axios = require("axios");
app.get("/", (req, res) => {
  res.json("Welcome to BDMS Database System.....");
});
app.use(express.json());

const corsOptions = {
  origin: ["https://beedatabdms.web.app"],
};
app.use(cors(corsOptions));


const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "8096",
  database: process.env.DB_DATABASE || "BDMS",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    process.exit(1);
  }
  console.log("Connected to MySQL database as ID " + connection.threadId);
  connection.release();
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.get("/donar", (req, res) => {
  const q = "select * from  donar";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/blood", (req, res) => {
  const { Blood_group, Units } = req.body;
  const q = "select * from  blood";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/donar", (req, res) => {
  const { Name, Gender, Age, Mobile, Email, Blood_group, Address } = req.body;
  const q = `INSERT INTO donar(Name,Gender,Age,Mobile,Email,Blood_group,Address) values(?)`;
  db.query(
    q,
    [[Name, Gender, Age, Mobile, Email, Blood_group, Address]],
    (err, result) => {
      if (err) {
        console.error("Database error: " + err);
        res.status(500).json({ success: false, message: "Donar Added Failed" });
      } else {
        res.json({ success: true, message: "Donar Added Successfully" });
      }
    }
  );
});
app.post("/blood", (req, res) => {
  const { Blood_group, Units } = req.body;
  const q = `update blood set Units = Units + ? where Blood_group = ?`;
  db.query(q, [Number(Units), Blood_group], (err, result) => {
    if (err) {
      console.error("Database error: " + err);
      res.status(500).json({ success: false, message: "Blood Added Failed" });
    } else {
      res.json({ success: true, message: "Blood Added Successfully" });
    }
  });
});
app.delete("/remove/:iddonar", (req, res) => {
  const { iddonar } = req.params;
  const q = "DELETE FROM donar WHERE iddonar = ?;";
  db.query(q, [iddonar], (err, result) => {
    if (err) {
      console.log("Database Error:" + err);
      res
        .status(500)
        .json({ success: false, message: "Donar Deleted Failed.." });
    } else {
      res.json({ success: true, message: "Donar Deleted Successfully.." });
    }
  });
});
app.post("/patients", (req, res) => {
  const { Name, Units, Blood_group, Purpose } = req.body;
  const q1 = `INSERT INTO patient(Name, Units, Blood_group, Purpose) VALUES (?)`;
  const insertPatientPromise = new Promise((resolve, reject) => {
    db.query(q1, [[Name, Units, Blood_group, Purpose]], (err, result) => {
      if (err) {
        console.error("Database error (insert patient): " + err);
        reject("Patient Added Failed");
      } else {
        resolve("Patient Added Successfully");
      }
    });
  });
  const q2 = `UPDATE blood SET Units = Units - ? WHERE Blood_group = ?`;
  const updateBloodPromise = new Promise((resolve, reject) => {
    db.query(q2, [Number(Units), Blood_group], (err, result) => {
      if (err) {
        console.error("Database error (update blood): " + err);
        reject("Blood Added Failed");
      } else {
        resolve("Blood Added Successfully");
      }
    });
  });
  Promise.all([insertPatientPromise, updateBloodPromise])
    .then((messages) => {
      res.json({ success: true, messages });
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: error });
    });
});
