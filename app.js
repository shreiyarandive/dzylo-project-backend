const express = require("express");
const app = express();
const expense = require("./expense/expense.route");
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/expenses", expense);

module.exports = app;
