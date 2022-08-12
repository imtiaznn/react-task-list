import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from './TaskList';

function App() {
  const [list, setList] = useState([]);
  const taskRef = useRef();

  function add() {
    const name = taskRef.current.value;
    if (name !== '') {
      setList((prevList) => {
        return [...prevList, { id: uuidv4(), desc: name, complete: false }];
      });
    }
    taskRef.current.value = '';
  }

  return (
    <div className='App'>
      <TaskList list={list} />
      <input ref={taskRef} type='text' />
      <button onClick={add}>Add</button>
      <button>Clear</button>
      <div>0 left to do</div>
    </div>
  );
}

export default App;
