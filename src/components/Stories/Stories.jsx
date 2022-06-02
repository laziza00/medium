import React from 'react'
import HeroRight from '../Hero/HeroRight/HeroRight'
import HeroSideBar from '../Hero/HeroSideBar/HeroSideBar'
import Story from './Story'
import './Stories.scss'


function Stories(props) {
  console.log(props.inputValue);
  return (
    <div className='stories'>
        <HeroSideBar style={{width: '6%'}}/>
        <Story className="story" inputValue = {props.inputValue}/>
        <HeroRight style={{width: '29%'}}/>
    </div>
  )
}

export default Stories