import './HeroBasicItems/HeroBasicItems.scss'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import ModalCheck from '../../ModalCheck/Modal/ModalCheck';

function HeroBasicItems(props) {

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
  
<li  id={props.id} className='herobasic__item'>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
          <div className='herobasic__info-box'>
          <Link to={`/person/${props.id}`} style={{textDecoration: 'none'}} >
            <div className='herobasic__user-box'>
              <img src={props.avatar} alt="img" />
              <p className='herobasic__name'>{props.name}
              <span className='herobasic__span-name'>in</span>  
              Personal Growth Lab· 
              <span className='herobasic__span-name'>{props.data}</span> 
              </p>
            </div>
            <div>
              <h3 className='herobasic__title'>
                {props.title}
              </h3>
              <p className='herobasic__text'>{props.descInfo}</p>
            </div>
            </Link>
        </div>
        <div className='herobasic__img-box'>
          <img className='herobasic__img' src={props.img} alt="img"/>
        </div>
      </div>
      <div style={{display: 'flex', margin: '35px 0 0 0'}}>
                <div className='herobasic__item-footer'>
                    <button className='herobasic__categor-btn'>{props.category}</button>
                    <p> 6 min read·</p>
                    <p> Selected for you</p>
                </div>
         <div style={{display: 'flex', position: 'relative'}}>
            <BootstrapTooltip title="Save" placement="top">
                <button className='herobasic__item-btn'
                      onClick={()=> open !== props.id ? setOpen(props.id): setOpen('')}>
                      <i className='bx bx-bookmark'></i>
              </button>
            </BootstrapTooltip>
            <ModalCheck 
                                      open ={open} 
                                      id ={props.id}
                                      bigSave ={props.bigSave}
                                      setBigSave ={props.setBigSave}
                                  />
            <BootstrapTooltip title="More" placement="top">
                <button className='herobasic__item-btn'>
                  <i className='bx bx-dots-horizontal-rounded'></i>
                </button>
          </BootstrapTooltip>
         </div>
    </div>
</li>
   

  )
}

export default HeroBasicItems