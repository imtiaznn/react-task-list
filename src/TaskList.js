import React from 'react';
import Task from './Task';

const TaskList = ({ list }) => {
  return (
    <div>
      {list.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
