import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Food } from './Food';

function AppParams() {
  return(
    <div>
      <Routes>
        <Route exact path='/food/:name' element={<Food name='egg'/>} />
      </Routes>
    </div> 
  )
}

export default AppParams;
