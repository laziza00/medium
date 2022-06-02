import React from 'react'
import './SaveList.scss'
import obj from '../../Object'

function SaveInner() {
  return (
    <ul className='save__list'>
    {obj.map((item, i)=> {
        if(item.trueOrFalse === true) {
            return  (
                <li className='save__post-item' key={i}>
                    <div  className='save__post-inner'>
                        <h2 className='save__item-title'>{item.title}</h2>
                        <div style={{display: 'flex'}}>
                            <button className='save__btn view-btn'>View list</button>
                            <p className='save__text'>story 
                                <i className='bx bxs-lock-alt'></i>
                            </p>
                        </div>
            
                    </div>
                    <img className='save__img' src={item.img} alt="img" />
                 </li>
          )
        }
    })}

</ul>
  )
}

export default SaveInner