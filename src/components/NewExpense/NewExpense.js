import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIseEditing] = useState(false);

  // create a function which will copy all input user data into a new object
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // just an ID for each expense; it is not unique in this instace
    };

    // object pointed at from app making expense data available to parent component
    props.onAddExpense(expenseData);
    setIseEditing(false);
  };

  const startEditingHandler = () => {
    setIseEditing(true);
  };

  const stopEditingHandler = () => {
    setIseEditing(false);
  };

  // point at the function making it available in ExpenseForm where it will be executed
  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
