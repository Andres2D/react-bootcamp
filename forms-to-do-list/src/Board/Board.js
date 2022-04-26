import React, { Component } from 'react';
import './Board.css';
import Item from './Item';
import ItemForm from './ItemForm';

class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: ['Empty trash']
        }
        this.add = this.add.bind(this);
    }    

    add(item) {
        this.setState({
            list: [...this.state.list, item]
        });
    }

    render() {
        const items = this.state.list.map(i => (
            <Item label={i} />
        ));

        return(
            <div className="board">
                <h1 className='title'>Todo List!</h1>
                <p className='subtitle'>A Simple React Todo List App.</p>
                <hr style={{width: '100%'}} />
                {items}
                <ItemForm addItem={this.add} />
            </div>
        )
    }
}

export default Board;
