// server.js
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const XLSX = require("xlsx");
const path = require("path");


const app = express();

app.use(cors());

app.get("/matrix", (req, res) => {
  const workbook = XLSX.readFile("../Files/MC.xlsx");
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  res.json(rows);
});

app.listen(4000, () => console.log("http://localhost:4000/matrix"));
