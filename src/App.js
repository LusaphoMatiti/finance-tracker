import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import Graphs from "./components/Graphs";
import React, { useEffect, useState } from "react";
import "./style/Graphs.css";
import Footer from "./components/Footer";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpenses) => {
    setExpenses([...expenses, newExpenses]);
  };

  const deleteExpenses = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const clearExpenses = () => {
    setExpenses([]);
  };

  return (
    <div>
      <Header />
      <div className="expense-list">
        <AddExpenseForm onAddExpense={addExpense} />
        <ExpenseList
          expenses={expenses}
          deleteExpenses={deleteExpenses}
          clearExpenses={clearExpenses}
        />
      </div>
      <div className="chart-container">
        <h2>Money spent on</h2>
        <Graphs data={expenses} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
