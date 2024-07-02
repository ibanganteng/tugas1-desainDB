require("doenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`its running on ${port}`);
});
