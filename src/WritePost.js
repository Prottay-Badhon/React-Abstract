import React, {Component} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Redirect from "react-router-dom/es/Redirect";

class WritePost extends Component {
    constructor() {
        super();
        this.state ={
            title:"",
            body:""
        }
    }
    onChangeHandeler=(event)=>{
       var myName = event.target.name;
       var myData = event.target.value;
       this.setState({[myName]:myData});

    }
    show=()=>{
        alert(this.state.title)
    }
    render() {
        if(sessionStorage.getItem("userName")==null){
            return(
                <div>
                    <Redirect to="/contact"></Redirect>
                </div>
            )
        }
        else

        return (
            <div className="container">
                <form onSubmit={this.show}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" className="form-control" onChange={this.onChangeHandeler} placeholder="Enter title" name ="title"/>
                            <small id="emailHelp" className="form-text text-muted">{this.state.title} </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Body</label>
                        <input type="texts" className="form-control" onChange={this.onChangeHandeler} placeholder="Body" name="body"/>
                        <small id="emailHelp" className="form-text text-muted">{this.state.body} </small>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default WritePost;