import React, { useState } from "react";
import "../style/Expenses.css";

const AddExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpenses = {
      id: Math.random(),
      description: description,
      amount: parseFloat(amount),
      date: date,
      category: category,
    };

    onAddExpense(newExpenses);
    setDescription("");
    setDate("");
    setAmount(0);
    setCategory("");
  };

  return (
    <div className="my-expenses">
      <form onSubmit={handleSubmit}>
        <h2>Add Expense</h2>

        <div className="info">
          <div className="left-section">
            <label>Amount: </label>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <label>Date: </label>
            <input
              type="date"
              name="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="right-section">
            <label>Description: </label>
            <input
              type="text"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddExpenseForm;
