// Dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const igRouter = require("./routes/ig");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use("/ig", igRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
