import React, {Component}from 'react';
import axios from 'axios';
import Form from './Form';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('/api/posts').then( res => {
            this.setState({
                posts: res.data
            })
        }).catch(err => console.log(err))
    }

    addPost = (imageUrl, title) => {
        axios.post('/api/posts', {imageUrl, title}).then( res => {
            this.setState({
                posts: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        const mappedPosts = this.state.posts.map( post => {
            return <div>
                <span>{post.title}</span>
                <img src={post.img_url}/>
            </div>
        })
        return <div className="main">
            <Form addPost={this.addPost}/>
            {mappedPosts}
        </div>
    }
}

export default Main;