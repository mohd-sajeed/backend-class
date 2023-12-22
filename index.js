require('dotenv').config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("sajid salam");
});

app.get("/login", (req, res) => {
    res.send("<h1>Please login at chai and code</h1>");
  });
  
app.get("/youtube",(req,res)=>{
res.send("<h2>CHAI AUR CODE</h2>")
})

app.listen(process.env.port, () => {
  console.log(`server is listening on port ${port}`);
});
