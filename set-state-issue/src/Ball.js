import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
    static defaultProps = {
        number: '?'
    }

    render() {
        const {number} = this.props;
        return(
            <div className='ball'>{number}</div>
        )
    }
}

export default Ball;
