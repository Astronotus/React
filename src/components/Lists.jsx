import React from 'react';



const Lists = ({ id, deleteList,name}) => (

            <li id={id} >
                <a href={id}> {name} </a>
                <button onClick={() => deleteList(id)}>Delete</button>
            </li>
        
)

export default Lists;




