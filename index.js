const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3003;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Listening at port ${port}`);
});
