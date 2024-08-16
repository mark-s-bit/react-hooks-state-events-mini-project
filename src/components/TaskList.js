// TaskList.jsx
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask }) => (
  <div>
    {tasks.map(task => (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onDelete={() => onDeleteTask(task.text)}
      />
    ))}
  </div>
);

export default TaskList;
