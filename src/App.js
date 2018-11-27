import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Provider} from "react-redux";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import store from "./store";
import {SET_CURRENT_USER} from "./constants/types";
import history from './history';
import './App.css';

if (localStorage.loginToken) {
    store.dispatch({
        type: SET_CURRENT_USER,
        user: localStorage.getItem('user')
    });
    history.push("/dashboard");
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <Router history={createBrowserHistory()}>

                    <div>

                        <Route exact path="/" component={Login}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
