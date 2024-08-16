// CategoryFilter.jsx
import React, { useState } from 'react';

const CategoryFilter = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={selectedCategory === category ? 'selected' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
