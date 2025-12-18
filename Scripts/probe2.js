import * as XLSX from "xlsx";

document.getElementById("excel-file").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  const data = await file.arrayBuffer();

  const workbook = XLSX.read(data, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet);

  console.log(rows); // Array of row objects
});
