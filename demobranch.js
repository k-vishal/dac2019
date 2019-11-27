var express = require("express");

var app = express();

app.get("/", (req, res)=>{
    res.send("welcome to demobranch");
})


app.post("/", (req, res)=>{
    res.send("welcome to git");
})


app.listen(7879, ()=>{
    console.log("Srever Started at 7879...");
})