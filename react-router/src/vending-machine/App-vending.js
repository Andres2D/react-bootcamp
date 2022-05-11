import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Chips from './Chips';
import FreshSardines from './FreshSardines';
import Home from './Home';
import Soda from './Soda';
import './Nav.css';

class AppVending extends Component {
  
  render() {
    return(
      <div>
        <nav className='nav'>
          <NavLink className={(navData)=>navData.isActive?"active-link":""} to='/'>Home</NavLink>
          <NavLink className={(navData)=>navData.isActive?"active-link":""} to='/soda'>Soda</NavLink>
          <NavLink className={(navData)=>navData.isActive?"active-link":""} to='/chips'>Chips</NavLink>
          <NavLink className={(navData)=>navData.isActive?"active-link":""} to='/fresh-sardines'>FreshSardines</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/fresh-sardines' element={<FreshSardines />} />
        </Routes>
      </div>
    )
  }
}

export default AppVending;
