import React, { useState, useRef } from 'react'
import './Offcanvas.scss'
import userPhoto from '../../assets/images/logo.png'
import OfcanvasItem from './OfcanvasItem'

function Offcanvas({commitArrList, openOf, CanvasClose}) {


// comment uchun

let textAreaRef =useRef()
const [commitArr, setCommitArr] =useState([...commitArrList]);
const [commitObj, setCommitObj] =useState({
userName: 'Laziza Abdulaxatova',
date: '5 days ago',
commitText: null,
userImg: {userPhoto},
count: 0,
reactions: 0,
})
const inputCommit =(e)=> {

setCommitObj({
userName : 'Laziza Abdulaxatova',
date :'5 days ago',
userImg: {userPhoto},
commitText: e.target.value,
count: 0,
reactions: 0
})
}

const writeCommit=()=> {
setCommitArr([...commitArr, commitObj])
textAreaRef.current.value = null;
}




return (
<div className={`ofcanvas${openOf ? "" : "right" }`} id="ofcanvas">
    <div className="ofcanvas__header">
        <h2 className='ofcanvas__title'> Responses (11)</h2>
        <div className='ofcanvas__head-inner'>
            <button className='ofcanvas__head-btn '>
                <i className='bx bxs-edit-location'></i>
            </button>
            <button className='ofcanvas__head-btn ' onClick={CanvasClose}>
                <i className='bx bx-x'></i>
            </button>
        </div>
    </div>
    <div className="ofcanvas__textareaBox">
        <div style={{display: 'flex'}}>
            <img className='ofcanvas__user' src="https://picsum.photos/100/100" alt="img" />
            <h3 className='ofcanvas__userName'> laziza uchkunovna</h3>
        </div>
        <textarea ref={textAreaRef} onChange={inputCommit} className="ofcanvas__textarea" cols="35" rows="6"
            placeholder="What are you thought?">

                                </textarea>
        <div className="ofcanvas__btnsBox">
            <div className="ofcanvas__btnStyle">
                <button className="ofcanvas__B">B</button>
                <button className="ofcanvas__B">i</button>
            </div>
            <div className="ofcanvas__btnsBox">
                <button className="ofcanvas__cancel">Cancel</button>
                <button onClick={writeCommit} className="ofcanvas__Respond">Respond</button>
            </div>
        </div>
    </div>
    <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
        aria-expanded="false">
        Dropdown button
    </button>

    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>

    <ul className="ofcanvas__list">
        {commitArr && commitArr.map((item, i)=> {
        return (
        <OfcanvasItem 
        key={i} 
        id={item.id} 
        userImg={item.userImg} 
        userName={item.userName} 
        date={item.date}
        commitText={item.commitText} 
        reactions={item.reactions} 
        count={item.count} /> )
        })}
    </ul>

</div>

)
}

export default Offcanvas