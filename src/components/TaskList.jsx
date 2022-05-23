import React, { useState } from 'react';
import TaskForm from './TaskForm.jsx';
import Task from './Task.jsx';
import '../styles/TaskList.css';

function TaskList() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  
  
  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  

  const addTask = (task) => {
    console.log('addTask')
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      setTasks([...tasks, task]);
    }
  };

  const removeTask = (id) => {
    console.log('removeTask')
    console.log(id);
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };
  
  const completeTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const editTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.editionMode = !task.editionMode;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const updateTask = (id, newText) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.editionMode = !task.editionMode;
        task.text = newText;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <TaskForm onSubmit={addTask}/>
      <div className="task-list-container">
        {
          tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              onComplete={completeTask}
              onDelete={removeTask}
              onEdit={editTask}
              editionMode={task.editionMode}
              updateTask={updateTask}
              />
          ))
        }
      </div>
    </>
  )
};

export default TaskList;