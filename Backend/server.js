const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
// const axois = require("axois");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "8096",
  database: "BDMS",
  insecureAuth: true,
});
app.get("/", (req, res) => {
  res.json("Hello....");
});
app.use(express.json());

let corsOptions = {
  origin: ["http://localhost:5000", "https://beedatabdms.web.app"],
};
app.use(cors(corsOptions));
// app.get("/", (req, res) => {
//   axois
//     .get(
//       "http://apis.data.go.kr/B551182/diseaseInfoService/getDissNameCodeList",
//       {
//         params: {
//           sickType: 1,
//           medTp: 2,
//           diseaseType: "SICK_NM",
//           searchText: textQuery,
//           ServiceKey: process.env.KEY,
//           numOfRows: numOfRowsQuery,
//           _type: "json",
//         },
//       }
//     )
//     .then(response => res.send(response.data));
// });

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

// const port = process.env.PORT || 5000;
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
