const express = require("express")
const app = express()
require("dotenv").config()

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("public"))

const route = require("./src/route/route");
app.use("/", route)


const port = process.env.port
app.listen(port, () => {
    console.log("http://localhost:3000")
})