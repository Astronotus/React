import React, { Component } from "react";
import { addList, deleteList } from "../../store/List/action"
import { connect } from "react-redux"
import InputList from "../../components/InputList"
import Lists from "../../components/Lists";

class List extends Component {
    state = {
        ListName: ""
    }

    putInputToProps = ({ target: { value } }) => {
        this.setState({
            ListName: value,
        })
    }

    addList = ({ key }) => {
        const { ListName } = this.state;
        if (key === "Enter") {
            const { addList } = this.props;
            addList((new Date()).getTime(), ListName);
            this.setState({
                ListName: ""
            })
        }
    }

    render() {
        const { ListName } = this.state;
        const { deleteList,  lists } = this.props

        return (
            <div>
                <InputList
                    onKeyPress={this.addList}
                    onChange={this.putInputToProps}
                    value={ListName} />
                <ul>
                    {lists.map(({id,name }) => (
                        <Lists 
                        id={id}
                        key={id} 
                        name={name}
                        deleteList={deleteList} />
                    ))}
                </ul>
            
            </div>
        )
    }
}

export default connect(({ tasks, lists }) => ({
    tasks,
    lists
}), { addList, deleteList })(List);


