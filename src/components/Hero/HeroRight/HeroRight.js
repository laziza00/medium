import React from 'react'
import './HeroRight.scss'
import obj from '../../../Object'
import HeroRightItems from './HeroRightItems'

function HeroRight(props) {

  let newArr =[]
  const searchHandler =(e)=> {
    console.log(e.target.value);

    obj.forEach((item, i)=> {
      if(item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ){
         newArr.push(item)
      }

    })
    props.setArr(newArr)
  }
  return (
    <div className='heroright'>
      <div className='heroright__inner'>
        <button className='heroright__dark-btn btn'>Get unlimited access</button>
        <div className='heroright__input-box'>
          <i className='bx bx-search' ></i>
          <input type="text" className='heroright__input' placeholder='Search' onChange={searchHandler}/>
        </div>
        <div className='heroright__main'>
          <ul className="heroright__list">
            <li className="heroright__item">
              <div className='heroright__main-inner'>
                 <span className="heroright__span"></span>
                  <h3 className='heroright__title'>
                    What We’re Reading Today
                  </h3>
              </div>
              <div className='heroright__img-box'>
                <img className='heroright__img' src="https://picsum.photos/id/15/100/100" alt="img" />
                <p className='heroright__name'>
                    What We’re
                </p>
              </div>
              <h3 className="heroright__slow">On Slowness</h3>

            </li>
          </ul>
          <p className='heroright__see'>See the full list
          </p>
          <p className ="heroright__who-text">
          Who to follow
          </p>
          <ul className='heroright__follow-list'>
            {obj && obj.map((item, i)=> {
              return (
                <HeroRightItems
                key ={i}
                name ={item.name}
                avatar ={item.avatar}
                descInfo ={item.descInfo}
                />
              )
            })}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default HeroRight