import React from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

function NewExpenses(props) {
  function saveExpenseDateHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpensesForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
}

export default NewExpenses;
