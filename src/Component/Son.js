import React, {Component} from 'react';
import Nati from "./Nati";
class Son extends Component {
    render() {
        return (
            <div>
            <Nati name={this.props.name}></Nati>
            </div>
        );
    }
}

export default Son;