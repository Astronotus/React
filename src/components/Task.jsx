import React from 'react';
import "./Task.css"


const  Task=({ text,isCompleted,id, deleteTask,completeTask,editMode,mode})=>(
        <li className="item" listid="listId">

            <div onClick={()=>completeTask(id)} className={isCompleted?"circle-check":"circle-uncheck"} ></div>
            <p  mode={toString(mode)}  className={isCompleted?"line-through":"text"}>{text}</p>
            <img onClick={()=>editMode(id)} src="img/edit.png" alt="edit" className="edit" />
            <img onClick={()=>deleteTask(id)} src="img/delete.png" alt="delete" className="trash" /> 
        </li>
    )

export default Task;

