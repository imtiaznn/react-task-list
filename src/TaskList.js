import React from 'react';
import Task from './Task';

const TaskList = ({ list, toggleTask }) => {
  return (
    <div>
      {list.map((task) => {
        return <Task key={task.id} task={task} toggleTask={toggleTask} />;
      })}
    </div>
  );
};

export default TaskList;
