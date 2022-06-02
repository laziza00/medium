import React from 'react'
import './SaveList.scss'

function SaveMain() {
  return (
    <div className='save__main'>
            <div className='save__main-box'>
                <h2 className='save__main-title'>Create a list to easily <br/> organize and share stories</h2>
                <button className='save__btn list-btn'>Start a list</button>
            </div>
            <div >
                <button className='save__circle-btn'>
                    <i className='bx bx-bookmark-alt-plus'></i>
                </button>

            </div>
            <button className='save__remove-btn'>
                <i className='bx bx-x'></i>
            </button>
        </div>
  )
}

export default SaveMain