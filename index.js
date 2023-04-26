// Dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
