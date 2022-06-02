import './App.css';
import Main from './components/Main';
import { Routes, Route } from "react-router-dom"
import React, {  useState } from 'react'
import SignIn from './components/Form/SignIn'
import SignUp from './components/Form/SignUp'
import obj from './Object'
import Layout from './components/Layout/Layout'
import Hero from './components/Hero/Hero';
import { logDOM } from '@testing-library/react';
import SaveList from './components/SaveList/SaveList';
import Person from './components/Person/Person';
import CreateText from './components/CreateText/CreateText';
import Write from './components/Write/Write';
import Portfolio from './components/Portfolio/Portfolio';
import Stories from './components/Stories/Stories';
import SaveItems from './components/SaveList/SaveItems';
import Offcanvas from './components/Offcanvas/Offcanvas';
import PublishStory from './components/Stories/PublishStory';


function App() {
  // for sinup and signin
  let [name, setName] =useState("")
  let [lastName, setLastName]=useState("")
  let [phone, setPhone] =useState("")
  let [email, setEmail] =useState("")
  let [password, setPassword] =useState("")
  let [isTrue, setIsTrue] =useState(true)

  // for stories

  let [inputValue, setInputValue] =useState([])
  let [isEmpty, setIsEmpty] =useState('')

//  for portfolio 
let [portValue, setPortValue] =useState([])
let [isPort, setPort] =useState('')

// for bigModal 

let [bigSave , setBigSave] =useState([{
     textValue : "Reading List",
     id : 2233987
}])

  return (
    <div className="App">
      
  <Layout>
     <Routes>
        <Route path="/" 
              element={ <SignUp
              name ={name}
              setName= {setName}
              lastName ={lastName}
              setLastName ={setLastName}
              phone ={phone}
              setPhone ={setPhone}
              email ={email}
              setEmail ={setEmail}
              password ={password}
              setPassword ={setPassword}
              isTrue ={isTrue}
              setIsTrue ={setIsTrue}
            /> } />
        <Route path="/signin" element={ <SignIn/> } />
        <Route path="/main" element={ <Main 
                                     obj={obj}
                                     bigSave ={bigSave}
                                     setBigSave ={setBigSave}

        />}/>
        <Route path="/hero" element={<Hero/>}/>
        <Route path="person/:id" element={ <Person /> } />
        <Route path="savelist" element={ <SaveList/> } />
        <Route path="saveitems" element={ <SaveItems/> } />
        <Route path="/offcanvas" element={ <Offcanvas/> } />
        <Route path="/publishstory" element={ <PublishStory/> } />
        <Route path="/write" element={ <Write   
                email ={email}
                inputValue ={inputValue}
                setInputValue ={setInputValue}
                isEmpty ={isEmpty}
                setIsEmpty ={setIsEmpty}
                portValue ={portValue}
                setPortValue ={setPortValue}
                isPort ={isPort}
                setPort ={setPort}
        /> } />
        <Route path="/stories" element={ <Stories
                inputValue ={inputValue}/> } />
        <Route path="/portfolio" element={ <Portfolio   
                name ={name}
                lastName ={lastName}
                phone ={phone}
                email ={email}
                password ={password}
                isTrue ={isTrue}
                portValue ={portValue}

        /> } />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
