import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // create a function which will copy all input user data into a new object
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // just an ID for each expense; it is not unique in this instace
    };

    // object pointed at from app making expense data available to parent component
    props.onAddExpense(expenseData);
  };

  // point at the function making it available in ExpenseForm where it will be executed
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
