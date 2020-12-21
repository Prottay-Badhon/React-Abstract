import React, {Component} from 'react';
import {PutiProvider} from "./MyContext";

class Puti extends Component {
    render() {
        return (
            <div>
              <PutiProvider>
                  {
                      msg=>{
                          return <h2>{ msg }</h2>;
                      }
                  }
              </PutiProvider>
            </div>
        );
    }
}

export default Puti;