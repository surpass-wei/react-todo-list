/**
 * Created by surpass.wei@gmail.com on 2017/6/22.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.deleteFn = this.deleteFn.bind(this);
    }

    render() {
        const todoArr = this.props.todoArr;

        return (
            <div>
                <ul>
                    {todoArr.map((item, index) => {
                        return <li key={index} onClick={() => this.deleteFn(item.id)}>{item.text}</li>
                    })}
                </ul>
            </div>
        )
    }

    deleteFn(id) {
        this.props.deleteFn(id);
    }
}

export default List