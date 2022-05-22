import React, { useState } from 'react';
import '../styles/EditTaskForm.css';

function EditTaskForm(props) {

  const [text, setText] = useState('');

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

export default EditTaskForm