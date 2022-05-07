import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {

    render() {
        return (
            <div>
                <div className='joke'>
                    <div className='vote'>
                        <button onClick={this.props.upvote} className='vote-arrow'>⬆</button>
                        <span className='score'>{this.props.vote}</span>
                        <button onClick={this.props.downvote} className='vote-arrow'>⬇</button>
                    </div>
                    <div className='text'>{this.props.joke}</div>
                    <div className='emoji-change'> :D </div>
                </div>
                <hr />
            </div>
        )
    }

}

export default Joke;
