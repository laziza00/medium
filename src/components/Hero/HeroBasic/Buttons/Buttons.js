import React from 'react'
import './Buttons.scss'

function Buttons(props) {


  
const filteredByName =(e)=> {

  
  if(e.target.id ===" ") {
      props.setArr(props.obj)
     
  }
  if(e.target.id === "Apps") {
  
      props.setArr(props.obj.filter(item => {
          return item.category === e.target.id
      }))
  }
  if(e.target.id ==="UXdesign") {
      props.setArr(props.obj.filter(item=> {
          return (item.category === e.target.id )
      }))
  }
  if(e.target.id === "Productivity") {
      props.setArr(props.obj.filter(item => {
          return item.category === e.target.id
      }))
  }
  if(e.target.id === "SelfImprovment") {
      props.setArr(props.obj.filter(item => {
          return item.category === e.target.id
      }))
  }
  if(e.target.id === "Writing") {
    props.setArr(props.obj.filter(item => {
        return item.category === e.target.id
    }))
  }
  if(e.target.id === "Spirtuality") {
    props.setArr(props.obj.filter(item => {
        return item.category === e.target.id
    }))
  }
  if(e.target.id === "Marketing") {
    props.setArr(props.obj.filter(item => {
        return item.category === e.target.id
    }))
  }
  if(e.target.id === "Freelancing") {
    props.setArr(props.obj.filter(item => {
        return item.category === e.target.id
    }))
  }

}    
  return (

          <button className='herobasic__btn'
          onClick = {filteredByName} 
          id = {props.category}
          >{props.item}</button>
 

  )
}

export default Buttons