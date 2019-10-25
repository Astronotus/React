import React, { Component } from "react";
import { addTask, deleteTask, completeTask, editMode, inputEdit,getTasks } from "../../store/Task/action"
import Input from "../../components/InputTask"
import ToDoList from "../../components/TaskList"
import { connect } from "react-redux"
import InputEdit from "../../components/InputTaskEdit";

class ToDo extends Component {
    state = {
        taskText: "",
        newText: "",
        listId: 1
    }

    putInputToProps = ({ target: { value } }) => {
        this.setState({
            taskText: value,
        })
    }

    putInputEditToProps = ({ target: { value } }) => {
        this.setState({
            newText: value,
        })
    }

    addNewText = ({ key }) => {
        const { newText } = this.state;
        if (key === "Enter") {
            const { inputEdit } = this.props;
            inputEdit(newText);
            this.setState({
                newText: ""
            })
        }
    }

    addTaskkk = ({ key }) => {
        const { taskText,listId } = this.state;
        if (key === "Enter") {
            const { addTask } = this.props;
            addTask(taskText, false, false,listId);
            this.setState({
                taskText: ""
            })
        }
    }

   
    editModeKek = () =>{
        const {tasks} =this.props
        if(tasks.some(task => task.mode === true)) return true
    }

    componentDidMount(){
        this.props.getTasks(this.state.listId)
    }

    render() {
        const { taskText, newText,display } = this.state;
        const { tasks, deleteTask, completeTask, editMode } = this.props

        return (
            <div  >
                <InputEdit
                    onLoad={this.editModeKek}
                    display={display}
                    onChange={this.putInputEditToProps}
                    onKeyPress={this.addNewText}
                    value={newText}
                     />
                <Input
                    onKeyPress={this.addTaskkk}
                    onChange={this.putInputToProps}
                    value={taskText} />
                <ToDoList
                    editModeKek={this.editModeKek}
                    editMode={editMode}
                    completeTask={completeTask}
                    tasksList={tasks}
                    deleteTask={deleteTask} />
            </div>
        )
    }
}

export default connect(state => ({
    tasks: state.tasks,
}), { addTask, deleteTask, completeTask, editMode, inputEdit, getTasks })(ToDo);


