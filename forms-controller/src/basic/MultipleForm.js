import React, { Component } from 'react';
import './MultipleForm.css';

class MultipleForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: ''
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
        alert(`You typed: ${this.state.userName}`);
        this.setState({userName: ''})
    }

    render() {
        return(
            <div>
                <h1>Form Demo</h1>
                <form className='demo-form' onSubmit={this.handleSubmit}>
                    <input 
                        className="form-input" 
                        type="text" 
                        value={this.state.userName} 
                        onChange={this.handleChange} 
                        placeholder='user name'
                        name="userName" />
                    <input 
                        className="form-input" 
                        type="email" 
                        value={this.state.email} 
                        placeholder='email'
                        onChange={this.handleChange} 
                        name="email" />
                    <input 
                        className="form-input" 
                        type="password" 
                        value={this.state.password} 
                        placeholder='password'
                        onChange={this.handleChange} 
                        name="password" />
                    <button type="submit">Submit</button>  
                </form>
            </div>
        )
    }
}

export default MultipleForm;
