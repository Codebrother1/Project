import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            imageUrl: ''
        }
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () => {
        const {imageUrl, title} = this.state
        this.props.addPost(imageUrl, title);
        this.setState({
            title: '',
            imageUrl: ''
        })
    }

    render(){
        return <div>
            <input
                placeholder="title"
                name="title"
                value={this.state.title}
                onChange={this.changeHandler}
            />
            <input
                placeholder="imageUrl"
                name="imageUrl"
                value={this.state.imageUrl}
                onChange={this.changeHandler}
            />
            <button onClick={() => this.submit()}>Submit</button>
        </div>
    }
}

export default Form;