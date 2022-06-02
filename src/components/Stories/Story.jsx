import React from 'react'
import './Stories.scss'
import StoryTabs from './StoryTabs'
import { Link } from 'react-router-dom'

function Story(props) {

  return (
    <div className='story'>
      <div className='story__inner'>
          <div className='story__header'>
            <h2 className='story__title'>Your stories</h2>
            <div className='story__btn-box'>
              <button className='story__write-btn btn'>Write a story</button>
              <button className='story__import-btn btn'>Import a story</button>
            </div>
            </div>
            <StoryTabs/>

            <div className='story__main'>
              <ul className='story__list'>
                {props.inputValue.map((item, i)=> {
                  if(item.text !== '') {
                    return (
                      <Link style={{textDecoration: 'none'}} to={'/write'} text ={item.text}>
                          <li className='story__item' key={i+1}>
                              <h3 className='story__item-title'>
                                {item.text}
                              </h3>
                              <div className="story__month">
                                <p className='story__text'>Created 1 day ago</p>
                                <button className='story__btn'>
                                  <i class='bx bx-chevron-down'></i>
                                </button>
                              </div>
                          </li>
                      </Link>
                    )
                  }
                })}

              </ul>
            </div>
          </div>
    </div>
  )
}

export default Story