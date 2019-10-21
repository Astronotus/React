import React, { Component } from "react";
import { addTask, deleteTask, completeTask, editMode, inputEdit } from "../../store/todo/action"
import Input from "../../components/Input"
import ToDoList from "../../components/todo-list"
import { connect } from "react-redux"
import InputEdit from "../../components/Input-edit";

class ToDo extends Component {
    state = {
        taskText: "",
        newText: ""
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
        const { taskText } = this.state;
        if (key === "Enter") {
            const { addTask } = this.props;
            addTask((new Date()).getTime(), taskText, false, false);
            this.setState({
                taskText: ""
            })
        }
    }

    render() {
        const { taskText, newText } = this.state;
        const { tasks, deleteTask, completeTask, editMode } = this.props

        return (
            <div  >
                <InputEdit
                    onChange={this.putInputEditToProps}
                    onKeyPress={this.addNewText}
                    value={newText}
                    display={tasks} />
                <Input
                    onKeyPress={this.addTaskkk}
                    onChange={this.putInputToProps}
                    value={taskText} />
                <ToDoList
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
}), { addTask, deleteTask, completeTask, editMode, inputEdit })(ToDo);


