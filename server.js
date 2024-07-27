const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use("/chord-chart", express.static(path.join(__dirname)));

app.get("/chord-chart/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/chord-chart/`);
});
