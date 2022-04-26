import React, { Component } from 'react';
import './Item.css';

class Item extends Component {

    render() {
        return(
            <div className="item">
                <p>{this.props.label}</p>
                <div className="icons">
                    <button className='edit'>✏️</button>
                    <button className='delete'>🗑️</button>
                </div>
            </div>
        )
    }
}

export default Item;
