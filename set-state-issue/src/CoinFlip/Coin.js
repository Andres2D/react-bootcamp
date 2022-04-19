import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    static defaultProps = {
        faces: [
            'obverse',
            'reverse'
        ]
    }
    render() {
        const {faces, face} = this.props;
        return(
            <img 
                className="coin"
                src={`https://touchcoins.moneymuseum.com/coins_media/Republic-of-Colombia-5-Pesos-1925/1320/${faces[face]}.png`}
                alt={faces[face]} 
            />
        )
    }
}

export default Coin;
