import Aux from '../hoc/Aux'
import Hero from './Hero/Hero'
import './Main.scss'
import obj from '../Object'
import React, {useState, useEffect} from 'react'

function Main(props) {

  let [arr, setArr]= useState([])

  useEffect(()=> {
    setArr(obj)
  }, [])

  return (
      <Aux>
          <div className=''>
             <Hero 
                   obj ={props.obj}
                   arr = {arr}
                   setArr={setArr}
                   bigSave ={props.bigSave}
                   setBigSave ={props.setBigSave}
             />
           
          </div>
      </Aux>
  )
}

export default Main