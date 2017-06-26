/**
 * Created by surpass.wei@gmail.com on 2017/6/22.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Input extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
    }

    render() {
        const commonStyle = {
            width: '100%',
            height: '40px',
            fontSize: '35px'
        };
        return (
            <div>
                <input
                    style={commonStyle}
                    onChange={this.changeHandler}
                    onKeyUp={this.keyUpHandler}
                    value={this.state.value}
                />
            </div>
        )
    }

    changeHandler(e) {
        this.setState({
            value: e.target.value
        })
    }

    keyUpHandler(e) {
        const value = this.state.value;
        if(e.keyCode ===13 && value.trim()){
            this.props.submitFn(value);
            this.setState({
                value: ''
            });
        }
    }
}

export default Input