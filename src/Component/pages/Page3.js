import React, {Component} from 'react';

class Page3 extends Component {
    constructor({match}) {
        super();
        this.state={
            name:match.params.username
        }
    }
    render() {
        return (
            <div>
                <h2>Page 3</h2>
                <p>Name:{this.state.name}</p>
            </div>
        );
    }
}

export default Page3;