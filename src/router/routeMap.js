/**
 * Created by surpass.wei@gmail.com on 2017/6/26.
 */
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'

import App from '../containers/App';
import Todo from '../containers/Todo';
import Input from '../components/Input';

class RouteMap extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.updateHandle = this.updateHandle.bind(this);
    }

    updateHandle() {
        console.log('route已变化');
    }

    render() {
        return (
            <HashRouter>
                <App>
                    <Route exact path="/" component={Input} />
                    <Route path="/todo-list" component={Todo}>
                        <Route path="/detail" component={Input}/>
                    </Route>
                </App>
            </HashRouter>
        )
    }
}

export default RouteMap;