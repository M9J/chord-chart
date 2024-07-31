// const express = require("express");
import express from "express";
// const path = require("path");
import path from "path";

const app = express();
const port = 3000;

app.use("/chord-chart", express.static(path.join("./")));

app.get("/chord-chart/*", (req, res) => {
  res.sendFile(path.join("./", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/chord-chart/`);
});
