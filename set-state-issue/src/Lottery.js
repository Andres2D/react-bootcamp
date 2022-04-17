import React, { Component } from 'react';
import Board from './Board';

class Lottery extends Component {
    render() {
        return (
            <div>
                <Board maxBalls={6} maxNum={40} />
                <Board title='Daily lottery' maxBalls={4} maxNum={10} />
            </div>
        )
    }
}

export default Lottery;
