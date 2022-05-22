import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");
  // console.log(props.data[0].title);
  function receiveSelectedYear(enteredYear) {
    setEnteredYear(enteredYear);
    console.log("expenses.js");
    console.log(enteredYear);
  }

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onSaveSelectedYear={receiveSelectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
