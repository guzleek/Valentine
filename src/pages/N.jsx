import React from 'react'
import heart from '../img/heart.png';
import { Link } from 'react-router-dom';

export default function N() {
  return (
    <div className='general_page'>
        <img src={heart} alt="" width="120px" />
     <div className="text-wrapp">Ты помойму не туда жмала...</div>
     <Link to='/next'>
        <button className='button-next'>Еще раз.. ? </button>
     </Link>
        
    </div>
  )
}
