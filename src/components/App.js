// App.jsx
import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import { CATEGORIES, TASKS } from '../data';

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState('All');

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const handleCategorySelect = (category) => {
    setFilteredCategory(category);
  };

  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter(task => task.text !== taskText));
  };

  const filteredTasks = filteredCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === filteredCategory);

  return (
    <div>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleCategorySelect} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
