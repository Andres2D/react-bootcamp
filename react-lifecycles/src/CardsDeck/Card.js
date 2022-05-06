import React, { Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props);
        const angle = Math.random() * 90 - 45;
        const xPos = Math.random()* 40 - 20;
        const yPos = Math.random()* 40 - 20;
        this.transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    }
    
    render(){
        return (
            <img 
                className='card'
                style={{transform: this.transform}} 
                src={this.props.image} 
                alt={this.props.name} />
        )}
}

export default Card;
