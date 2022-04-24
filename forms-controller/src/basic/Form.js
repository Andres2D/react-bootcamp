import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            userName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            userName: evt.target.value
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
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text"
                        id="username" 
                        value={this.state.userName} 
                        onChange={this.handleChange} />  
                    <button type="submit">Submit</button>  
                </form>
            </div>
        )
    }
}

export default Form;
