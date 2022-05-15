import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");
  // console.log(props.data[0].title);
  function receiveSelectedYear(enteredYear) {
    setEnteredYear(enteredYear);
    console.log("expenses.js");
    console.log(enteredYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onSaveSelectedYear={receiveSelectedYear}
        />

        <ExpenseItem
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        ></ExpenseItem>

        <ExpenseItem
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        ></ExpenseItem>

        <ExpenseItem
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        ></ExpenseItem>

        <ExpenseItem
          title={props.data[3].title}
          amount={props.data[3].amount}
          date={props.data[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
