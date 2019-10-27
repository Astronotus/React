import React from 'react';
import {addList, deleteList,getLists} from "./store/List/action"
import { connect } from "react-redux"
import InputList from "./components/InputList"
import "./App.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ListPage from "./components/ListPage";
import Home from "./components/Home"



class App extends React.Component {
    state={
        ListName:""
    }

    componentDidMount(){
        this.props.getLists()
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
            addList(ListName);
            this.setState({
                ListName: ""
            })
        }
    }

    render() {
        const { ListName } = this.state;
        const {deleteList} =this.props

        let links = null, router = null;
        if (this.props.lists) {
          links = this.props.lists.map((list) => {
            const id = list.id
            return (
              <li key={id}>
                <Link to={`/${id}`} className="link">
                  {list.name}
                </Link>
                <button onClick={() => deleteList(id)}>Delete</button>
              </li>
            );
          });
    
          router = (
            <Route
              path="/:id"
              children={
                <ListPage
                  lists={this.props.lists}
                />}
            />
          );
        }
    
        return (
          <Router>
            <div className="App">
              <nav>
                <span>Lists</span>
                <ol className="links">{links}</ol>
                <InputList
                    onKeyPress={this.addList}
                    onChange={this.putInputToProps}
                    value={ListName} />
              </nav>
              <Switch>
                {this.props.lists ? router : null}
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        );
      }
    }



export default connect(state => ({
    lists: state.lists,
}),({addList, deleteList,getLists}))(App);







