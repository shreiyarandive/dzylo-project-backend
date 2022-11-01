const express = require("express");
const router = express.Router();
const expenseController = require("./expense.controller");

router.get("/getAllExpenses", expenseController.getAllExpense);

router.get("/getExpensebyId", expenseController.getExpensebyId);

router.post("/bookExpense", expenseController.bookExpense);

router.post("/updateExpense", expenseController.updateExpense);

router.delete("/deleteExpenseById", expenseController.deleteExpenseById);

module.exports = router;
