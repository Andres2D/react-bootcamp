import React, { Component } from 'react';
import './Wisdom.css';

class WiseSquareWithProps extends Component {
    static defaultProps = {
        messages: [
            "The ability to make a decision based on the combination of knowledge, experience, and intuitive understanding.",
            "The ability to discern or judge what is true, right, or lasting; insight.",
            "Common sense; good judgment."
        ]
    }

    // constructor(){
        // Fix undefined this (3) ==> this.dispenseWisdowm = this.dispenseWisdowm.bind(this);
    // }

    // Fix undefined this (4) ==> use arrow function
    dispenseWisdowm = () => {
        const {messages} = this.props;
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

    render() {
        return(
            // Fix undefined this (1) ==> onMouseEnter={this.dispenseWisdowm.bind(this)
            // Fix undefined this (2) ==> onMouseEnter={() => this.dispenseWisdowm()}
            <div className='WiseSquare' onMouseEnter={this.dispenseWisdowm}>
                😷
            </div>
        )
    }
}

export default WiseSquareWithProps;
