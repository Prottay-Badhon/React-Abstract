import React, {Component} from 'react';
import axios from 'axios'
class MyAxios extends Component {
    constructor() {
        super();
        this.state={
            posts:[],
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response)=>{
                this.setState({posts:response.data})
            })
            .catch(function (response){
                console.log(response);
            })

    }




    render() {
        const posts = this.state.posts;
        const myData = posts.map((post)=>{
            return (
                <div>
                    <a key={post.id} href="">{post.title}</a>
                    <br></br>
                    <p>{post.body}</p>
                </div>
            )
        });
        return (
            <div>
                <div>
                    <p>{myData} </p>
                </div>
            </div>
        );
    }
}

export default MyAxios;
