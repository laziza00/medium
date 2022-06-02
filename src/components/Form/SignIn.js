
import React, { useState } from 'react'
import './Form.scss'
import forumImg from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function SignIn(props) {

  let email="";
  let password=""
 

  let [inputEmail, setInputEmail]=useState()
  let [inputPassword, setInputPassword]=useState()
  let [temp, setTemp]=useState(true)



  let checkEmail = (e) => {
    email = e.target.value;

    if(email.match(/[a-z]/) !== null && email.match(/[0-9]/) !== null && email.match(/[@]/) !== null && email.length >= 8){
      setInputEmail(true)
    }else{
      setInputEmail(false) 
    }
  }
let checkPassword =(e)=> {
  let password = e.target.value

  if(password.match(/[a-z]/) !== null && password.match(/[0-9]/) !== null && password.match(/[@#$%^&*]/) === null && password.length <= 8){
    setInputPassword(true);
  }else{
    setInputPassword(false); 
  }
  if(  inputEmail == true && inputPassword == true){
    setTemp(true);
  } else{
    setTemp(false);
  }
}

let submitHandler = () => {
  props.setInputEmail(email);
  props.setInputPassword(password)
}

  return (
    <div className='forum'>
    
        <div className='forum__inner'>
            <div className='forum__img-box'>
                <img src={forumImg} className="forum__img"/>
            </div>
            <div className='forum__info'>
                <h2 className='forum__title'>Sign In</h2>
                <p className='forum__link-text'>Do not you have an account? 
                <Link  className='forum__link' to={`/signup`}>Sign up</Link>
                </p>
                <form className='forum__form' onSubmit={submitHandler}>
                     <input className='forum__input' 
                            type="email" 
                            placeholder='Email' 
                            onChange={checkEmail}
                            style ={{border: inputEmail? "1px solid green": "1px solid red"}}
                            required/>
                      <input className='forum__input' 
                            type="text" 
                            placeholder='Password' 
                            onChange={checkPassword}
                            style ={{border: inputPassword? "1px solid green": "1px solid red"}}
                            required/>
                       <Link to={'/main'} style={{textDecoration: "none"}}> 
                            <button className='forum__btn'
                             type='submit' 
                             disabled={temp}>Next step</button>   
                      </Link>
                </form>
            </div>
        </div>
     
      
    </div>
  )
}

export default SignIn