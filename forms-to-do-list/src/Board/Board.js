import React, { Component } from 'react';
import './Board.css';
import Item from './Item';
import ItemForm from './ItemForm';
import { v4 as uuidv4 } from 'uuid';

class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        this.addUpdate = this.addUpdate.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }    

    addUpdate(item, currentId) {
        if(currentId) {
            const idx = this.state.list.findIndex(i => i.id === currentId);
            let newItem = this.state.list[idx];
            newItem.item = item;
            this.setState(st => ({
                list: [...st.list.slice(0, idx), st.list[idx] = newItem, ...st.list.slice(idx+1, st.list.length)]
            }));
        }else {
            const id = uuidv4();
            this.setState({
                list: [...this.state.list, {item, id}]
            });
        }
    }

    deleteItem(item) {
        this.setState(st => ({
            list: st.list.filter(i => i.id !== item.id)
        }));
    }

    render() {
        const items = this.state.list.map(({id, item}) => (
            <Item 
                key={id} 
                value={item}
                id={id}
                addUpdateItem={this.addUpdate} 
                deleteItemHandler={this.deleteItem}
            />
        ));

        return(
            <div className="board">
                <h1 className='title'>Todo List!</h1>
                <p className='subtitle'>A Simple React Todo List App.</p>
                <hr style={{width: '100%'}} />
                {items}
                <ItemForm 
                    addUpdateItem={this.addUpdate}
                />
            </div>
        )
    }
}

export default Board;
