import React from 'react';
import ToDoItem from './Task';
import "./TaskList.css"


const ToDoList = ({ tasksList, deleteTask,completeTask,editMode }) => (
    <ul>
        {tasksList.map(({ id, text, isCompleted,mode,listId }) => (
            <ToDoItem 
            id={id}
            listId={listId} 
            mode={mode} 
            editMode={editMode} 
            completeTask={completeTask} 
            deleteTask={deleteTask} 
            key={id} 
            text={text} 
            isCompleted={isCompleted} />
        ))}
    </ul>
    );



export default ToDoList