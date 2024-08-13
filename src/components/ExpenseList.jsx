import React, { useState } from "react";
import "../style/ExpenseList.css";

const ExpenseList = ({ expenses, deleteExpenses, clearExpenses }) => {
  const [filterDate, setFilterDate] = useState("");

  const filterExpenses = filterDate
    ? expenses.filter((expense) => expense.date === filterDate)
    : expenses;

  return (
    <div className="myExpenses">
      <h2 className="title">My Expenses</h2>
      <div className="expenses-info">
        <label htmlFor="filterDate">Filter by Date: </label>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>
      <ul className="expense-list">
        {filterExpenses.map((expense) => {
          return (
            <>
              <div className="expense-details">
                <li className="expense-item" key={expense.id}>
                  <div className="expense-description">
                    Description : {expense.description}
                  </div>
                  <div className="expense-amount"> R {expense.amount}</div>

                  <div className="expense-date">Date : {expense.date}</div>
                </li>
                <button
                  className="delete-btn"
                  onClick={() => deleteExpenses(expense.id)}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}
      </ul>
      <button className="clear-btn" type="button" onClick={clearExpenses}>
        Clear All
      </button>
    </div>
  );
};
export default ExpenseList;
