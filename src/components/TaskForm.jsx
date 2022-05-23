import React from 'react';
import '../styles/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [text, setText] = React.useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: text,
      completed: false
    }

    e.target.reset();
    setText('');

    props.onSubmit(newTask)
  }

  return (
    <form className="task-form"
    onSubmit={handleSubmit}>
      <input 
        className="task-input"
        type="text"
        placeholder="Add a task" 
        onChange={handleChange} />
      <button 
      className="add-task-button"
      type="submit">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm;