import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <label>
        <input type='checkbox' checked={task.complete} />
        {task.desc}
      </label>
    </div>
  );
};

export default Task;
