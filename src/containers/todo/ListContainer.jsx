import React, { Component } from "react";
import { addTask, deleteTask, completeTask, editMode, inputEdit,getTasks } from "../../store/Task/action"
import Input from "../../components/InputTask"

import { connect } from "react-redux"
import InputEdit from "../../components/InputTaskEdit";
import Task from "../../components/Task";

class List extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.state = {
          name: props.name,
        };
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
            addTask(taskText, false, false,this.id);
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
        this.props.getTasks(this.id)
    }

    renderTasks = () => {
        if (!this.props.tasks || this.props.tasks.length === 0) return null;
        const tasks = this.props.tasks.map((task) => {
          return (
            <li key={task.id}>
              <Task id={task.id} list={this} text={task.text} isCompleted={task.isCompleted}/>
            </li>
          );
        });
        return <ul className="tasks">{tasks}</ul>
      };

    render() {
        const { taskText, newText,display } = this.state;

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
                    {this.renderTasks()}
                
            </div>
        )
    }
}

export default connect(state => ({
    tasks: state.tasks,
}), { addTask, deleteTask, completeTask, editMode, inputEdit, getTasks })(List);


