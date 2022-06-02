import './Offcanvas.scss'
import React, { useState, useRef } from 'react'
import ofReply from './ofReply'


function OfcanvasItem(props) {


    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

// for reply 
const [replyArr, setReplyArr] = useState([])
const [replyObj, setReplyObj] = useState({
    userId: 2002,
    userImg: "https://imgur.com/SLOdhA7.png",
    userName: "Xushnora Nishonova",
    userData: "in less than a minute",
    reaksiya: null,
    replies: null,
})
// for reply

const TakeReplyValue = (e) => {
    console.log(e);
    setReplyObj({
        userId: 2002,
        userImg: "https://imgur.com/SLOdhA7.png",
        userName: "Xushnora Nishonova",
        userData: "now",
        reaksiya: null,
        replies: null,
        comment: e.target.value
    })
}

   // reply uchun
   const sumbitToReply = () => {
    setReplyArr([...replyArr, replyObj])
    replyRef.current.value = null;
    setOpenModal(false)
}


const replyRef = useRef();


  return (
    <li className ="ofcanvas__item">
                        <div className="ofcanvas__main">
                            <div className='ofcanvas__main-inner'>
                                <div className='ofcanvas__img-box'>
                                    <img className ="ofcanvas__img" src={props.userImg} alt="img" />
                                    <div className='ofcanvas__name-box'>
                                        <h3 className='ofcanvas__name'>{props.userName}</h3>
                                        <p className='ofcanvas__date'>{props.date}</p>
                                    </div>
                                </div>
                                <button className='ofcanvas__more'>
                                    <i className='bx bx-dots-horizontal-rounded' ></i>
                                </button>
                            </div>
                    <p className='ofcanvas__commit'>
                    {props.commitText}
                    </p>
                    <button className='ofcanvas__read'>Read more</button>
                    <div className='ofcanvas__item-btns'>
                        <div className='ofcanvas__clap-btns'>
                            <button className="ofcanvas__mes-btn">
                               <i className='bx bx-like'></i>
                            </button>
                            <div style={{display: 'flex'}}>
                                <button className="ofcanvas__mes-btn">
                                    <i className='bx bx-message-rounded'></i>
                                </button>
                                <p className ="ofcanvas__reply" >{props.count} reply </p>
                            </div>
                      
                        </div>
                        <button className="ofcanvas__mes-btn" onClick={handleOpenModal}>
                            Reply
                        </button>
                        <div className='ofcanvas__modal'>
                            <ofReply
                            openModal ={openModal}
                            replyRef ={replyRef}
                            TakeReplyValue ={TakeReplyValue}
                            sumbitToReply = {sumbitToReply}
                            handleCloseModal ={handleCloseModal}
                            />
                     
                        </div>
                    </div>
              
                </div>
        </li>
  )
}

export default OfcanvasItem