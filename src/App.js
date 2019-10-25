import React from 'react';
import { connect } from "react-redux"
import ToDo from "./containers/todo/TaskContainer"
import List from "./containers/todo/ListContainer"
import "./App.css"
import { BrowserRouter as Router, Route, } from "react-router-dom";



class App extends React.Component {
    
    render() {
        //const list=this.props.tasks.listId

        return (
            <div className="app-wrap">
                <div className="lists">
                    <List />
                </div>
                <Router>
                    <Route path={"/lists/1/tasks"} component={ToDo} />
                </Router>

            </div>
        )
    }
}




export default connect(state => ({
    tasks: state.tasks,
}))(App);







