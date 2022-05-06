import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card'; 
import './Card.css';
import './Deck.css';

const API_BASE = 'https://www.deckofcardsapi.com/api/deck';
class Deck extends Component {
    constructor(props){
        super(props);
        this.state = {
            deck: null,
            drawn: []
        }

        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        let deck = await axios.get(`${API_BASE}/new/shuffle`);
        this.setState({
            deck: deck.data
        });
    }

    async getCard() {
        const { deck_id } = this.state.deck;
        try {
            const card = await axios.get(`${API_BASE}/${deck_id}/draw`);
            if(!card.data.success) {
                throw new Error('No cards remaining!');
            }
            const cardProps = card.data.cards[0]; 
            this.setState(st => ({
                drawn: [...st.drawn, 
                {
                    id: cardProps.code,
                    img: cardProps.image,
                    name: `${cardProps.value} of ${cardProps.suit}`
                }]
            }))
        } catch(err) {
            alert(err);
        }
    }

    render(){
        const cards = this.state.drawn.map(c => (
            <Card key={c.id} image={c.img} name={c.name} />
        ))
        return (
            <div>
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card</button>
                <div className='card-area'>
                    {cards}
                </div>
            </div>
        )
    }
}

export default Deck;
