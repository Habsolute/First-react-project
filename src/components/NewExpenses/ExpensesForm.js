import React, { useState } from "react";
import "./ExpensesForm.css";
function ExpensesForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // option 2 to do it
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  function titleChangeHandler(event) {
    // option 2 to do it
    // setUserInput({
    //   enteredTitle: event.target.value,
    // });

    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  }

  function amountChangeHandler(event) {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  }

  /**
   * receive form
   * return expenseData whit new information
   */
  function submitHandler(e) {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    console.log(expenseData);
  }

  return (
    <form onSubmit={submitHandler} action="#" method="get">
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpensesForm;
