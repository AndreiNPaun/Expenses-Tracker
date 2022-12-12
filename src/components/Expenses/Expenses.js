import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020"); // we initialize this state with one of the option values from the filter

  const fitlterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={fitlterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

/*
  Another way of doing it but using more JSX code

  Conditional statement which checks if the filtered array is empty will output a message
  JS will return the part after the and operator after the check if the first condition is met allowing the split of the ternary expression into two
        
  {filteredExpenses.length === 0 && <p>No expenses found.</p>}
  {filteredExpenses.length > 0 &&
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id} // prop needed by react to identify individual items and to avoid performance issues; requires unique value per list item to work (id in this case)
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
*/
