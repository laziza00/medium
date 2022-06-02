import React from 'react'
import './OfReply.scss'

function ofReply({openModal, replyRef, TakeReplyValue, sumbitToReply, handleCloseModal}) {
    console.log(openModal);
return (
<div className={`ofcanvas__textareaBox ofBox ${openModal ? '' : 'rightModal' }`}>
    <textarea ref={replyRef} onChange={TakeReplyValue} className="ofcanvas__textarea" cols="35" rows="6"
        placeholder="What are you thought?">

    </textarea>
    <div className="ofcanvas__btnsBox">
        <div className="ofcanvas__btnStyle">
            <button className="ofcanvas__B">B</button>
            <button className="ofcanvas__B">i</button>
        </div>
        <div className="ofcanvas__btnsBox">
            <button className="ofcanvas__cancel" onClick={handleCloseModal}>Cancel</button>
            <button onClick={sumbitToReply} className="ofcanvas__Respond">Respond</button>
        </div>
    </div>
</div>
)
}

export default ofReply