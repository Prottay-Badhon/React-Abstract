import React, {Component} from 'react';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "react-router-dom";
class MyRouter extends Component {
    render() {
        return (
            <div>
               <Switch>
                   <Route exact path="/MyHome" component={Page1}></Route>
                   <Route  path="/MyContact" component={Page2}></Route>
                   <Route  path="/MyService/:username" component={Page3}></Route>
                   <Route  component={NotFound}></Route>

               </Switch>
            </div>
        );
    }
}

export default MyRouter;