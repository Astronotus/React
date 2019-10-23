import React from 'react';
import ToDo from "./containers/todo/TaskContainer"
import List from "./containers/todo/ListContainer"
import "./App.css"



function App() {
    return (
        
        <div className="app-wrap">
            <List/>
            <ToDo/>
         </div>
        
        
    )
}



export default App








