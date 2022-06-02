import './HeroBasic.scss'
import React, {useState} from 'react';
import Buttons from './Buttons/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import BasicTabs from '../HeroNav/HeroNav'


function HeroBasic(props) {

  let categoryArr = ["All", "UXdesign", "Apps", "Productivity", "SelfImprovment", "Writing","Spirtuality",'Marketing', 'Freelancing']


  let typeArr = [" ", "UXdesign", "Apps", "Productivity", "SelfImprovment", "Writing","Spirtuality", "Marketing",'Freelancing' ]


  return (
    <div className='herobasic'>
      <div className='herobasic__inner'>
      <div className='herobasic__text-box'>
          <button className='herobasic__add-btn'>
            <FontAwesomeIcon className='herobasic__icon' icon={faPlus}/>
          </button>
          <p className='herobasic__text'>Keep up with latest in any topic</p>
        </div>
        <ul className='herobasic__btns-list'>
        {categoryArr.map((item, index)=> {
              return  <Buttons
                key = {"d"+index}
                item = {item}
                obj= {props.obj}
                category = {typeArr[index]}
                arr={props.arr}
                setArr={props.setArr}
              />
          })}
        </ul>
        <BasicTabs
        arr={props.arr}
        setArr= {props.setArr}
        bigSave ={props.bigSave}
        setBigSave ={props.setBigSave}
        />
      </div>
    </div>
  )
}

export default HeroBasic