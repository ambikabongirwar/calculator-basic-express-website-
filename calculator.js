//jshint esversion:6
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
const port = 4000

app.get('/', (req, res) => {
    console.log("sent")
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var result = Number(num1) + Number(num2);
    res.send(`Result of the calculation is ${result}`);
})

app.listen(port, () => {
    console.log(`App running at localhost:${port}`);
})
