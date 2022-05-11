import React, { Component } from 'react';

class Cat extends Component {

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return(
      <div>
        <h1>Cat</h1>
        <h3>This cat is name: {this.props.name}</h3>
        <img style={{width: '180px'}} src='https://i.pinimg.com/originals/46/37/63/4637632aa50dec67576174f269915e11.png' alt='cat' />
      </div>
    )
  }
}

export default Cat;
