import React, { Component } from 'react';
import ItemForm from './ItemForm';
import './Item.css';

class Item extends Component {

    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            solved: false
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSolve = this.handleSolve.bind(this);
    }

    handleEdit() {
        this.setState(st => ({
            isEditing: !st.isEditing,
        }));
    }

    handleSubmit(value) {
        this.props.addUpdateItem(value, this.props.id);
        this.handleEdit();
    }

    handleDelete() {
        const {id, value} = this.props;
        this.props.deleteItemHandler({id, item: value});
    }

    handleSolve() {
        this.setState(st => ({
            solved: !st.solved
        }));
    }

    render() {
        return(
            <div>
            {
                this.state.isEditing 
                ?
                    <ItemForm 
                        isEditing 
                        value={this.props.value}
                        addUpdateItem={this.handleSubmit}
                    />
                : 
                    <div className="item">
                        <p 
                            style={
                                {
                                    textDecoration: this.state.solved ? 'line-through' : 'none',
                                    cursor: 'pointer'
                                }
                            }
                            onClick={this.handleSolve}
                        >
                            {this.props.value}
                        </p>
                        <div className="icons">
                            <button 
                                className='edit'
                                onClick={this.handleEdit}
                            >✏️</button>
                            <button 
                                className='delete'
                                onClick={this.handleDelete}
                            >🗑️</button>
                        </div>
                    </div>
            }
            </div>
        )
    }
}

export default Item;
