import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Hangman.css";
import {img0, img1, img2, img3, img4, img5, img6} from './assets/index';
import {randomWord} from './words';
import BtnLetter from './BtnLetter';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { 
      nWrong: 0, 
      guessed: new Set(), 
      answer: randomWord(),
      winner: false 
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.restart = this.restart.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(value) {
    let ltr = value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      winner: !this.guessedWord().includes('_')
    }));
  }

  restart() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() });
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <BtnLetter
        key={uuidv4()}
        ltr={ltr}
        selectKey={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      />
    ));
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong}/${this.props.maxWrong}`} />
        <div className="controls">
          <p className="info">Wrong answers: {this.state.nWrong}</p>
          <button onClick={this.restart}>Restart</button>
        </div>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        {
          this.state.nWrong >= this.props.maxWrong || this.state.winner 
          ? (this.state.winner 
              ? 
                <div>
                  <h2>You Win</h2>
                  <p>Word: {this.state.answer}</p>
                </div> 
              : 
                <div>
                  <h2>You lose</h2>
                  <p>Word: {this.state.answer}</p>
                </div>  )
          :
            <p className='Hangman-btns'>{this.generateButtons()}</p>
        }
      </div>
    );
  }
}

export default Hangman;
