let { exec } = require("child_process");
let app = require("express")();
let path = require("path");

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "./HTML") });
  exec("sudo python gpio/on.py");
});

app.post("/brrr", (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, console.log("Server listening on Port 3000"));
