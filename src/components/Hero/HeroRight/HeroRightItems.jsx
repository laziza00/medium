import React from 'react'
import './HeroRight.scss'

function HeroRightItems({name, avatar}) {
  return (
    <li className='heroright__follow-item'>
    <img className='heroright__follow-img' src={avatar} alt="img" />
    <div className='heroright__follow-box'>
      <h3 className='heroright__userName'>{name}</h3>
        <p className='heroright__userText'>“Don’t become a slave to technology — manage your phone.
         </p>
    </div>
    <button className='heroright__follow-btn'>Follow</button>
  </li>
  )
}

export default HeroRightItems