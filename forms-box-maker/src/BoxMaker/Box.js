import React, { Component } from 'react';

class Box extends Component {
    render() {
        return(
            <div className='box' style={{
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.color
                }}>
                <button onClick={this.props.removeBox}>&times;</button>
            </div>
        )
    }
}

export default Box;
