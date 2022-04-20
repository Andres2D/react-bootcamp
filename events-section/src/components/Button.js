import React, { Component } from 'react';

class Button extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.changeColor(this.props.color);
    }

    render(){
        const colorObj = {backgroundColor: this.props.color};
        return(
            <button 
                className='button'
                style={colorObj}
                onClick={this.handleClick}>
                    Click me!
            </button>
        )
    }
}

export default Button;
