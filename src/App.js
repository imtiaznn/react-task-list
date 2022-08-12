import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from './TaskList';

const LOCAL_STORAGE_KEY = 'storedList';

function App() {
  const [list, setList] = useState([]);
  const taskRef = useRef();

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedList) setList(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  function add() {
    const name = taskRef.current.value;
    if (name !== '') {
      setList((prevList) => {
        return [...prevList, { id: uuidv4(), desc: name, complete: false }];
      });
    }
    taskRef.current.value = '';
  }

  function clear() {
    const newList = list.filter((task) => !task.complete);
    setList(newList);
  }

  function toggleTask(id) {
    const newList = [...list];
    const task = newList.find((task) => task.id === id);
    task.complete = !task.complete;
    setList(newList);
  }

  return (
    <div className='App'>
      <TaskList list={list} toggleTask={toggleTask} />
      <input ref={taskRef} type='text' />
      <button onClick={add}>Add</button>
      <button onClick={clear}>Clear</button>
      <div>{list.filter((task) => !task.complete).length} left to do</div>
    </div>
  );
}

export default App;
