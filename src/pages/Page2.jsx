import React from 'react'
import { Link } from 'react-router-dom'

export default function Page2() {
  return (
    <div className='general_page'>
        <div className="text-wrapp">Хочешь открыть? </div>
        <img src="https://p16-tiktok-dm-sticker-sign-sg.ibyteimg.com/tos-alisg-i-dhq7zx4c1p-sg/0bddda5bded143d4b3e770279d72e179~tplv-dhq7zx4c1p-full.awebp?rk3s=00edd399&x-expires=1773432371&x-signature=HkJOwoKb6q9Gr%2F9zXANaM3gfAgU%3D" alt="" className='img2' width='250apx' />
        <div className="buttons-wrapp">
            <Link to='/yes'>
                <button className='button-next'>Открыть </button>
            </Link>
            <Link to='/no'>
                <button className='button-next whit-color'>Не-а</button>
            </Link>
        </div>
    </div>
  )
}
