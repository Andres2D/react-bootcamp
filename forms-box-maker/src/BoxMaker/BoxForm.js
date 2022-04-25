import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            color: ''
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
        const newBox = {...this.state, id: uuidv4()};
        this.props.createBox(newBox);
        this.setState({
            height: '',
            width: '',
            color: ''
        })
    }

    render() {
        return(
            <form className='form' onSubmit={this.handleSubmit}>
                <div className='form-section'>
                    <label htmlFor='height'>Height: </label>
                    <input 
                        type="text" 
                        name="height" 
                        value={this.state.height}
                        id="height"
                        onChange={this.handleChange}
                    />
                </div>
                <div className='form-section'>
                    <label htmlFor='width'>Width: </label>
                    <input 
                        type="text" 
                        name="width" 
                        value={this.state.width}
                        id="width"
                        onChange={this.handleChange}
                    />
                </div>
                <div className='form-section'>
                    <label htmlFor='color'>Color: </label>
                    <input 
                        type="text" 
                        name="color" 
                        value={this.state.color}
                        id="color"
                        onChange={this.handleChange}
                    />
                </div>
                <button type='submit'>Add new box!</button>
            </form>
        )
    }
}

export default BoxForm;
