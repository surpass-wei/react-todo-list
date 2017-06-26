/**
 * Created by surpass.wei@gmail.com on 2017/6/26.
 */
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                children:
                {this.props.children}
            </div>
        )
    }
}

export default App;