import HeroRight from '../Hero/HeroRight/HeroRight'
import HeroSideBar from '../Hero/HeroSideBar/HeroSideBar'
import './SaveItems.scss'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import obj from '../../Object'

function SaveItems(props) {

  const [open, setOpen] = useState();

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <div className='saveItems'>
        <HeroSideBar style ={{width: '6%'}}/>
       <div className='saveIt'>
         <div className='saveIt'>
            <div>

            </div>
         </div>
         {obj && obj.map((item, i)=> {
           return (
             
            <li  key ={i} className='herobasic__item'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                  <div className='herobasic__info-box'>
             
                    <div className='herobasic__user-box'>
                      <img src={item.avatar} alt="img" />
                      <p className='herobasic__name'>{item.name}
                      <span className='herobasic__span-name'>in</span>  
                      Personal Growth Lab· 
                      <span className='herobasic__span-name'>{item.data}</span> 
                      </p>
                    </div>
                    <div>
                      <h3 className='herobasic__title'>
                        {item.title}
                      </h3>
                      <p className='herobasic__text'>{item.descInfo}</p>
                    </div>
               
                </div>
                <div className='herobasic__img-box'>
                  <img className='herobasic__img' src={item.img} alt="img"/>
                </div>
              </div>
              <div style={{display: 'flex', margin: '35px 0 0 0'}}>
                        <div className='herobasic__item-footer'>
                            <button className='herobasic__categor-btn'>{item.category}</button>
                            <p> 6 min read·</p>
                            <p> Selected for you</p>
                        </div>
                 <div style={{display: 'flex', position: 'relative'}}>
                
                        <button className='herobasic__item-btn'
                              onClick={()=> open !== item.id ? setOpen(item.id): setOpen('')}>
                              <i className='bx bx-bookmark'></i>
                      </button>
           
                        <button className='herobasic__item-btn'>
                          <i className='bx bx-dots-horizontal-rounded'></i>
                        </button>
                 
                 </div>
            </div>
        </li>
           )
         })}
       
       </div>
        <HeroRight style ={{width: '29%'}}/>

    </div>
  )
}

export default SaveItems