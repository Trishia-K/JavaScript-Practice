const express = require('express');
const router = express.Router();

// State memory for income value and expenses list
let incomeData = { totalIncome: 0 };
let expensesList = [];

// get income and expenses together
router.get('/', (req, res) => {
  res.json({
    income: incomeData.totalIncome,
    expenses: expensesList
  });
});

//Update the income value
router.post('/income', (req, res) => {
  incomeData.totalIncome = parseFloat(req.body.income) || 0;
  res.json({ message: "Income updated", income: incomeData.totalIncome });
});

// Log a new expense
router.post('/expenses', (req, res) => {
  const newExpense = {
    id: Date.now(),
    text: req.body.text,
    amount: parseFloat(req.body.amount) || 0
  };

  expensesList.push(newExpense);
  res.status(201).json(newExpense);
});

module.exports = router;