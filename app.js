const express = require("express");
const mongoose = require("mongoose");
const router = require("../backend/routes/bookroutes");
const app = express();

//middlewares
app.use(express.json());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://prachiWadhwa:Prachi2003@cluster0.jj1fnlo.mongodb.net/BookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(8000);
  })
  .catch((err) => console.log(err));
