import React  from 'react';
import { useParams } from 'react-router-dom'
import './Food.css';


export function Food() {
  const { name } = useParams();
  const url = `https://source.unsplash.com/1600x900/?${name}}`;
    console.log(name);
    return (
      <div className='food'>
        <h1>Random pic </h1>
        <img className='img' src={url} alt='car' />
      </div>
    )
}

export default Food;
