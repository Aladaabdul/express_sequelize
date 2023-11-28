const express = require("express");
require("dotenv").config()
const bodyParser = require("body-parser")
const bookRouter = require("./routes/books")
const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use('/books', bookRouter)

app.get("/", (req, res) => {
    res.send("Welcome Home")
})

app.listen(PORT, () => {
    console.log(`http:\\localhost:${PORT}`)
})