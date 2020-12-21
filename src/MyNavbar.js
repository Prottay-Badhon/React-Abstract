import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import WritePost from "./WritePost";

class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/home"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                            </li>
                            <li className="nav-item">
                               <Link to="/link" activeStyle={{color:'orange'}}><a className="nav-link"  activeStyle={{color:'orange'}} href="#">Link</a></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                    <Route path="/home" component={WritePost}></Route>
                    <Route path="/link" component={WritePost}></Route>

                </Router>
            </div>
        );
    }
}

export default MyNavbar;