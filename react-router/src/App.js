import { Component } from 'react';
import './App.css';
import About from './basics-not-ideal/About';
import Cat from './basics-not-ideal/Cat';
import Contact from './basics-not-ideal/Contact';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'about'
    }
  }

  changePage(page) {
    this.setState({
      page
    });
  }

  renderpage() {
    if(this.state.page === 'about') {
      return <About />
    }else if(this.state.page === 'cat') {
      return <Cat />
    }else {
      return <Contact />
    }
  }

  render() {
    return(
      <div className="App">
        <nav className='navbar'>
          <a onClick={() => this.changePage('about')}>About</a>
          <a onClick={() => this.changePage('cat')}>Cat</a>
          <a onClick={() => this.changePage('contact')}>Contact</a>
        </nav>
        {this.renderpage()}
      </div>
    );
  }
}

export default App;
