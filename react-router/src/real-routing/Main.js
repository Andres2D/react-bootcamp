import React, { Component } from 'react';
import {
  // Link, 
  NavLink, 
  Route, 
  Routes
} from 'react-router-dom';
import About from './About';
import Cat from './Cat';
import Contact from './Contact';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div>
        <nav className="App-nav">
          {/* <Link to='/'>About</Link>
          <Link to='/cat'>Cat</Link>
          <Link to='/contact'>Contact</Link> */}
          <NavLink className={(navData)=>navData.isActive?"active-link":""} to='/'>About</NavLink>
          <NavLink className={(navData)=>navData.isActive?"active-link":""} to='/cat'>Cat</NavLink>
          <NavLink className={(navData)=>navData.isActive?"active-link":""} to='/contact'>Contact</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/cat' element={<Cat name='Lilith' />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
     )
  }
}

export default Main;
