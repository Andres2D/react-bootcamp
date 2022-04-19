import React, { Component } from 'react';
import './Color.css';

class Color extends Component {
    
    constructor(){
        super();
        this.state = {
            color: this.getColor()
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let newColor;
        do {
            newColor = this.getColor();
        } while(newColor === this.state.color);

        this.setState({
            color: newColor
        });
    }

    getColor() {
        return Math.floor(Math.random()*16777215).toString(16);
    }

    render(){
        return(
            <div 
                className="color"
                style={{backgroundColor: `#${this.state.color}`}}
                onClick={this.handleClick}
            ></div>
        )
    }
}

export default Color;
