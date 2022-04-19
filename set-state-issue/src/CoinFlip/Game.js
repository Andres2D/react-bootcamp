import React, { Component } from 'react';
import Coin from './Coin';
import './Game.css';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            coin: 0,
            heads: 0,
            tails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(this.flipCoin);
    }
    
    flipCoin(curState) {
        const flip = Math.floor(Math.random() * 2);
        return {
            coin: flip,
            heads: flip === 0 ? curState.heads + 1 : curState.heads,
            tails: flip === 1 ? curState.tails + 1 : curState.tails,
        }
    }
 
    render() {
        return(
            <div className="game">
                <h1 className="title">Let's flip a coin!</h1>
                {
                    this.state.heads + this.state.tails > 0 
                    && <Coin face={this.state.coin} />
                }
                <button onClick={this.handleClick} className="button-flip">FLIP MEEE</button>
                <p>Out of {this.state.heads + this.state.tails} flips, there been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        );
    }
}

export default Game;
