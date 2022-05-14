import React from "react";
import "./ExpensesForm.css";
function ExpensesForm() {
  return (
    <form action="#" method="get">
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__controls">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__controls">
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpensesForm;
