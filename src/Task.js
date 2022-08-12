import React from 'react';

const Task = ({ task, toggleTask }) => {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={task.complete}
          onChange={() => {
            toggleTask(task.id);
          }}
        />
        {task.desc}
      </label>
    </div>
  );
};

export default Task;
