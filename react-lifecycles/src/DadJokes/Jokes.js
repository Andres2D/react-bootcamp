import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import { v4 as uuidv4 } from 'uuid';
import './Jokes.css';

const URL_BASE = 'https://icanhazdadjoke.com/';

class Jokes extends Component {

    static defaultProps = {
        jokesLength: 10
    }

    constructor(props){
        super(props);
        this.state = {
            jokes: []
        }
    }

    handleVotes(id, delta) {
        console.log(id, delta);
        this.setState(st => ({
            jokes: st.jokes.map(j => j.id === id ? {...j, vote: j.vote + delta} : j)
        }));
    }

    async componentDidMount() {
        let jokes = [];
        while(jokes.length < this.props.jokesLength) {
            const response = await axios.get(URL_BASE, {
                headers: {
                    Accept: 'application/json'
                }
            });
            jokes.push({joke: response.data.joke, vote: 0, id: uuidv4()});
        }

        this.setState({
            jokes
        })
    }

    render() {
        const jokesRender = this.state.jokes.map(j => (
            <Joke 
                key={j.id} 
                vote={j.vote} 
                joke={j.joke}
                upvote={() => this.handleVotes(j.id, 1)}
                downvote={() => this.handleVotes(j.id, -1)} />)
        )
        return (
            <div className="jokes-list">
                <div className='sidebar'>
                    <h1>Dad<span className="bold-title"> JOKES</span></h1>
                    <img className='emoji' src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt='Laugh'/>
                    <button className='button'><h1>New Jokes</h1></button>  
                </div>
                <div className="jokes">
                    {jokesRender}
                </div>
            </div>
        )
    }
}

export default Jokes;
