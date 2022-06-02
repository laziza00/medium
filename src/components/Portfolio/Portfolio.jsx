
// import React from 'react'
import HeroRight from '../Hero/HeroRight/HeroRight'
import HeroSideBar from '../Hero/HeroSideBar/HeroSideBar'
import './Portfolio.scss'
import PorfolioTabs from './Tabs'



function Portfolio(props) {

  return (
      <div className='portfolio'>
          <HeroSideBar style={{width: '6%'}}/>
            <div className='portfolio__inner'>
                <div className='portfolio__main'>
                   <div className='portfolio__header'>
                       <h2 className='portfolio__title'>{props.email}</h2>
                       <button className='portfolio__more'>
                           <i class='bx bx-dots-horizontal-rounded' ></i>
                       </button>
                   </div>
                   <div className='portfolio__box'>
                       <PorfolioTabs portValue ={props.portValue}/>

                   </div>

                </div>
      
            </div>
            <HeroRight  style={{width: '29%'}}/>
      </div>

  )
}

export default Portfolio