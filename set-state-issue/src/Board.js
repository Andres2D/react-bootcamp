import React, {Component } from 'react';
import Ball from './Ball';
import './Board.css';

class Board extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {
            balls: Array.from({length: this.props.maxBalls})
        }
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        this.setState(curState => ({
            balls: curState.balls.map(() => Math.floor(Math.random() * this.props.maxNum) + 1)
        }));
    }

    handleClick() {
        this.generate();
    }

    render() {
        const {title} = this.props;
        return(
            <div className="board">
                <h1>{title}</h1>
                <div className='balls'>
                    {
                        this.state.balls.map((b, i) => <Ball number={b} key={i} />)
                    }
                </div>
                <button onClick={this.handleClick} className='button'>Generate</button>  
            </div>
        )
    }
}

export default Board;
