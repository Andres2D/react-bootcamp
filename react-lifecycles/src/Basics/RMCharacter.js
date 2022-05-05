import React, { Component } from 'react';
import axios from 'axios';

class RMCharacter extends Component {

    constructor(props){
        super(props);
        this.state = {
            imgUrl: '',
            name: ''
        };
    }

    async componentDidMount() {
        const url = `https://rickandmortyapi.com/api/character/${this.props.character}`;
        let response = await axios.get(url);
        const {data} = response;
        // console.log(response);
        this.setState({
            imgUrl: data.image,
            name: data.name
        });
    }

    render(){
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <img src={this.state.imgUrl} alt={this.state.name} />
            </div>
        )
    }

}

export default RMCharacter;
