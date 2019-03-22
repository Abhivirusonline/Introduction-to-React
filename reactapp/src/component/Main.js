import React, {Component} from 'react';

class Main extends Component{
    render() {
        return(
            <div className="main">
                <button onClick={this.props.changeCounter}>Update Counter</button>
            </div>
        )
    }
}
export default Main;