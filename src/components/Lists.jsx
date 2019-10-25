import React from 'react';
import {NavLink} from "react-router-dom"
import {BrowserRouter as Router } from "react-router-dom";


const Lists = ({ id, deleteList,name, changeList}) => (

            <li id={id} >
                <Router>
                <NavLink to={"/lists/"+id+"/tasks"} onClick={() => changeList(id)}>{name}</NavLink> 
                </Router>
            <button onClick={() => deleteList(id)}>Delete</button>
            </li>
        
)

export default Lists;




