import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class MyNavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <img src="/images/cartoon.jpg"/>
                    <li><NavLink to="/MyHome" activeStyle={{color: "green"}}>Home</NavLink></li>
                    <li><NavLink to="/MyContact" activeStyle={{color: "green"}}>Contact</NavLink></li>
                    <li><NavLink to="/MyService" activeStyle={{color: "green"}}>Service</NavLink></li>

                </ul>
            </div>
        );
    }
}

export default MyNavigation;