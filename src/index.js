import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore,applyMiddleware } from "redux"
import { Provider} from "react-redux";
import App from "./App"
import rootReducer from './rootReducer';
import thunk from "redux-thunk"
import "@babel/polyfill"


const middleware = [thunk]

const store = createStore(rootReducer,applyMiddleware(...middleware))



ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>

), document.getElementById('root'));


