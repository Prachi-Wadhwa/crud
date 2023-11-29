const express = require("express");
const router = express.Router();
const Book = require("../model/book");

const booksController = require("../controllers/bookscontroller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getByID);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
module.exports = router;
