const express = require("express")
const bookController = require("../controller/bookController")

const bookRouter = express.Router()

bookRouter.get("/", bookController.getAllBooks)
bookRouter.post("/", bookController.addBooks)
bookRouter.put("/:id", bookController.updateBooks)
bookRouter.delete("/:id", bookController.deleteBooks)

module.exports = bookRouter