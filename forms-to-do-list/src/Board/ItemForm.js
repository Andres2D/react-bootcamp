import React, { Component } from 'react';
import './ItemForm.css';

class ItemForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            item: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: ''
        });
    }

    render() {
        return(
            <form className='input' onSubmit={this.handleSubmit}>
                <label className='label' htmlFor='todo'>New Todo</label>
                <div>
                    <input 
                        className='box'
                        type="text" 
                        name="item" 
                        value={this.state.item}
                        id="item"
                        onChange={this.handleChange}
                    />
                    <button className='btn'>Add Todo</button>
                </div>
            </form>
        );
    }
}

export default ItemForm;
