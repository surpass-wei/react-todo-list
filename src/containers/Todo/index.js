/**
 * Created by surpass.wei@gmail.com on 2017/6/22.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Input from '../../components/Input';
import List from '../../components/List';

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
            this.state = {
                todoArr: []
            };
        this.submitFn = this.submitFn.bind(this);
        this.deleteFn = this.deleteFn.bind(this);
    }

    render() {
        return (
            <div>
                <p>待办事项</p>
                <Input submitFn={this.submitFn}/>
                <List todoArr={this.state.todoArr} deleteFn={this.deleteFn}/>
            </div>
        )
    }

    submitFn(value) {
        const id = this.state.todoArr.length;
        this.setState({
            todoArr: this.state.todoArr.concat({
                id: id,
                text: value
            })
        })
    }

    deleteFn(id) {
        let data = this.state.todoArr;
        this.setState({
            todoArr: data.filter(item => {
                if (item.id !== id) {
                    return item
                }
            })
        })
    }
}

export default Todo