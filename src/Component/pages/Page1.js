import React, {Component} from 'react';
import Redirect from "react-router-dom/Redirect";

class Page1 extends Component {
    render() {
       if(sessionStorage.getItem("userName")==null){
           return(
               <div>
                  <Redirect to="/home"></Redirect>
               </div>
           )
       }
       else
           return (
               <div>
                   page 1
               </div>
           )
    }
}

export default Page1;