import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import '../styles/Task.css';

function Task({ id, text, completed, onComplete, onDelete, onEdit, editionMode }) {


  return (
    <div
      className={
        `task-container 
      ${completed ? 'completed-task' : ''} 
      ${editionMode ? 'edition-mode' : ''}`
      }>

      {
        !editionMode
          ? <div
            className="task-text"
            onClick={() => onComplete(id)}>
            {text}
            </div>
          :
          <input
          className="task-text"
          value={text}
          />
      }

      <AiOutlineCloseCircle className="task-button"
        onClick={() => onDelete(id)} />
      <BsFillPencilFill className="task-button"
        onClick={() => onEdit(id)} />


    </div>
  );
}

export default Task;