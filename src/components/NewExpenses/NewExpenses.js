import React, { useState } from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDateHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpensesForm
          onSaveExpenseData={saveExpenseDateHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
