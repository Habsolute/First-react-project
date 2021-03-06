// import ExpenseItem from "./components/ExpenseItem.js";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import "./App.css";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  function addExpenseHandler(expense) {
    // console.log("in App.js");
    // console.log(expenses);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      <Expenses data={expenses}></Expenses>
    </div>
  );
}

export default App;
