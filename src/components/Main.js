import React, {Component}from 'react';
import axios from 'axios';
import Form from './Form';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            talkers: []
        }
    }

    componentDidMount(){
        axios.get('/api/talkers').then( res => {
            this.setState({
                talkers: res.data
            })
        }).catch(err => console.log(err))
    }

    addTalker = (imageUrl, title) => {
        axios.post('/api/talkers', {imageUrl, title}).then( res => {
            this.setState({
                talkers: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        const mappedTalkers = this.state.talkers.map( talker => {
            return <div>
                <span>{talker.title}</span>
                <img src={talker.img_url}/>
            </div>
        })
        return <div className="main">
            <Form addTalker={this.addTalker}/>
            {mappedTalkers}
        </div>
    }
}

export default Main;