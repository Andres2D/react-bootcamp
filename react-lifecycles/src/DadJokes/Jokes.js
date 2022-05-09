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

  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(localStorage.getItem('jokes')) || [],
      loading: true
    }
    this.seenJokes = new Set(this.state.jokes.map(j => j.text));
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.getJokes();
  }

  handleVotes(id, delta) {
    this.setState(st => ({
      jokes: st.jokes.map(j => j.id === id ? { ...j, vote: j.vote + delta } : j)
    }),
    () => this.saveToLocalStorage(this.state.jokes));
  }
  
  componentDidMount() {
    if(this.state.jokes.length === 0) {
      this.getJokes();
    }else {
      this.setState({
        loading: false
      })
    }
  }

  async getJokes() {
    try {
      this.setState({
        loading: true
      });
  
      let jokes = [];
      while (jokes.length < this.props.jokesLength) {
        const response = await axios.get(URL_BASE, {
          headers: {
            Accept: 'application/json'
          }
        });
        const newJoke = response.data.joke; 
        if(!this.seenJokes.has(newJoke))
        {
          jokes.push({ joke: newJoke , vote: 0, id: uuidv4() });
        } else{
          console.log('Duplicated');
        }
          
      }
      this.setState(st => ({
        jokes: [...st.jokes, ...jokes],
        loading: false
      }),
      () => this.saveToLocalStorage(this.state.jokes));  
    } catch(err) {
      alert(err);
      this.setState({
        loading: false
      })
    }
  }

  saveToLocalStorage(jokes) {
    const currentJokes = JSON.stringify(jokes);
    localStorage.setItem('jokes', currentJokes);
  }

  render() {
    const jokes = this.state.jokes.sort((a,b) => b.vote - a.vote);
    const jokesRender = jokes.map((j) => (
      <Joke
        key={j.id}
        vote={j.vote}
        joke={j.joke}
        upvote={() => this.handleVotes(j.id, 1)}
        downvote={() => this.handleVotes(j.id, -1)} />)
    );

    const loader = (
      <div className="loader">
        <h3>Loading</h3>  
      </div>
    );

    const application = (
      <div className="jokes-list">
        <div className='sidebar'>
          <h1>Dad<span className="bold-title"> JOKES</span></h1>
          <img className='emoji' src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt='Laugh' />
          <button onClick={this.handleClick} className='button'><h1>New Jokes</h1></button>
        </div>
        <div className="jokes">
          {jokesRender}
        </div>
      </div>
    );
    
    return this.state.loading ? loader : application;
  }
}

export default Jokes;
