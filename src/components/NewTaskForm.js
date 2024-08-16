// NewTaskForm.jsx
import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState(categories[0] || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ text: details, category });
    setDetails('');
    setCategory(categories[0] || '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details:
        <input
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </label>
      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;
