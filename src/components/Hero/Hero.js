import React from 'react'
import './Hero.scss'
import HeroBasic from './HeroBasic/HeroBasic'
import HeroRight from './HeroRight/HeroRight'
import HeroSideBar from './HeroSideBar/HeroSideBar'

function Hero(props) {
  // console.log(props.obj);
  return (
    <div className='hero'>
       <HeroSideBar/>
       <HeroBasic
        obj ={props.obj}
        arr = {props.arr}
        setArr={props.setArr}
        bigSave ={props.bigSave}
        setBigSave ={props.setBigSave}
       />
       <HeroRight       
        obj ={props.obj}
        arr = {props.arr}
        setArr={props.setArr}/>
    </div>
  )
}

export default Hero