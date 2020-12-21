import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

class Page2 extends Component {
    render() {
        return (
            <div>
                    <h2>Page 2</h2>
                <Button className="bg-danger"><Link to="/MyService/badhon">Badhon</Link></Button>
            </div>
        );
    }
}

export default Page2;