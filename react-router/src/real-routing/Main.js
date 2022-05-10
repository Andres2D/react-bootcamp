import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom';
import Cat from './Cat';

class Main extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/cat' element={<Cat />} />
        </Routes>
      </div>
     )
  }
}

export default Main;
