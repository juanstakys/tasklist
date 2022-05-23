import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { IoIosCheckmark } from 'react-icons/io';
import '../styles/Task.css';

function Task({ id, text, completed, onComplete, onDelete, onEdit, editionMode, updateTask }) {

  const [taskText, setTaskText] = React.useState(text);


  return (
    <div
      className={
        `task-container 
      ${completed ? 'completed-task' : ''} 
      ${editionMode ? 'edition-mode' : ''}`
      }>

      {
        !editionMode
          ?
          <div
            className="task-text"
            onClick={() => onComplete(id)}>
            {text}
          </div>
          :
          <input
            className="task-text-edition"
            defaultValue={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
      }

      {
        !editionMode
          ?
          <div className="task-actions">
            <AiOutlineCloseCircle className="task-button"
              onClick={() => onDelete(id)} />
            <BsFillPencilFill className="task-button"
              onClick={() => onEdit(id)} />
          </div>
          :
          <div className="task-actions">
            <IoIosCheckmark 
              className="task-button" 
              onClick={()=>updateTask(id, taskText)}/>
          </div>
      }

    </div>
  );
}

export default Task;