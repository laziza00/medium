import React from 'react'
import HeroRight from '../Hero/HeroRight/HeroRight'
import HeroSideBar from '../Hero/HeroSideBar/HeroSideBar'
import './SaveList.scss'
import Save from './Save'
import SaveTabs from './SaveTabs'


function SaveList() {

return (
    <div className='box' >
    <HeroSideBar style={{width: '6%'}}/>
    <div className='save' >
    <div className='save__inner'>
        <div className='save__title-box'>
            <h2 className='save__title'>Your lists</h2>
            <button className='save__btn'>New list</button>
        </div>
    <SaveTabs/>

    <Save style={{width: '100%', }}/>
    </div>
    </div>
   <HeroRight style={{width: '29%', }}/>
    </div>

  )
}

export default SaveList
