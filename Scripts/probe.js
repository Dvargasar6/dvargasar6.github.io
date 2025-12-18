// import_xlsx.js
const XLSX = require("xlsx");

// Load the workbook
const workbook = XLSX.readFile("../Files/MC.xlsx");
console.log("Hola");

// Get the first sheet
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert to JSON
const data = XLSX.utils.sheet_to_json(sheet);
console.log(data);
