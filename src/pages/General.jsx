import React from 'react'
import convert from '../img/convert.png';
import '../styles/general.css';
import { Link } from 'react-router-dom';


export default function General() {
  return (
    <div className='general_page'>
        <img src={convert} alt="" width='300px' />
       <div className="text_and_button-wrapp">
         <div className="text-wrapp"> У меня для тебя письмо...</div>
         <Link to='/next'>
            <button className='button-next'>Далее → </button>
         </Link>
       </div>

    </div>
  )
}
