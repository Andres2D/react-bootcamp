import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {

  getColor() {
    if(this.props.vote >= 15) {
      return '#4CAF50';
    }else if(this.props.vote >= 12) {
      return '#8BC34A'; 
    }else if(this.props.vote >= 9) {
      return '#CDDC39'; 
    }else if(this.props.vote >= 6) {
      return '#FFEB3B';
    }else if(this.props.vote >= 3) {
      return '#FFC107';
    }else if(this.props.vote >= 0) {
      return '#FF9800';
    }else {
      return '#F44336';
    }
  }

  getEmojiClass() {
    if(this.props.vote >= 15) {
      return 'em em-rolling_on_the_floor_laughing';
    }else if(this.props.vote >= 12) {
      return 'em em-laughing'; 
    }else if(this.props.vote >= 9) {
      return 'em em-smiley'; 
    }else if(this.props.vote >= 6) {
      return 'em em-slightly_smiling_face';
    }else if(this.props.vote >= 3) {
      return 'em em-neutral_face';
    }else if(this.props.vote >= 0) {
      return 'em em-confused';
    }else {
      return 'em em-angry';
    }
  }

  render() {
    return (
      <div>
        <div className='joke'>
          <div className='vote'>
            <button onClick={this.props.upvote} className='vote-arrow'>
              <i className="em em-arrow_up" aria-label="UPWARDS BLACK ARROW"></i>
            </button>
            <span className='score' style={{borderColor: this.getColor()}}>{this.props.vote}</span>
            <button onClick={this.props.downvote} className='vote-arrow'>
              <i className="em em-arrow_down" aria-label="DOWNWARDS BLACK ARROW"></i>
            </button>
          </div>
          <div className='text'>{this.props.joke}</div>
          <div className='emoji-change'>
            <i className={this.getEmojiClass()} aria-label="ROLLING ON THE FLOOR LAUGHING"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Joke;
