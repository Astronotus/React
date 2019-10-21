import React from 'react';
import ToDoItem from './todo-item';
import "./todo-list.css"


const ToDoList = ({ tasksList, deleteTask,completeTask,editMode }) => (
    <ul>
        {tasksList.map(({ id, text, isCompleted,mode }) => (
            <ToDoItem 
            id={id} 
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