import React from 'react'
import tort from '../img/tort.png'
import { Link } from 'react-router-dom'
export default function Y() {
  return (
    <div className='general_page'>
       <div className="img-class" style={{ fontSize: "60px" }}>❤️</div>
       <div className="text-wrapper valentine-text">С Днем Святого<br/>Валентина!</div>
       <div className="img_conteiner">
            <div className="ball">
            <img src='https://p16-tiktok-dm-sticker-sign-sg.ibyteimg.com/tos-alisg-i-dhq7zx4c1p-sg/92390095758a47be8a8721723f0b99d8~tplv-dhq7zx4c1p-full.awebp?rk3s=00edd399&x-expires=1773434441&x-signature=6THug2NHUA9NMur7Mk6KSH6xFOk%3D' alt=""  width='200px'/>
            </div>
            <Link to='/yeeeah'>
            <button className='button-next'>Далее!!! </button>
            </Link>

       </div>

        
    </div>
  )
}
