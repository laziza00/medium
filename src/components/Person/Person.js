import React, { useState,useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import './Person.scss';
import obj from '../../Object'
import HeroSideBar from '../Hero/HeroSideBar/HeroSideBar';
import HeroRight from '../Hero/HeroRight/HeroRight';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Offcanvas from '../Offcanvas/Offcanvas';






function Person(props) {
 
    const [openOf, setOpenOf] = useState(false);
    const CanvasOpen = () => setOpenOf(true);
    const CanvasClose = () => setOpenOf(false);

    const [count, setCount] = useState(0)

    const SetInterval =()=> {
        setCount(count +1 )
    }
    
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

    let location = useLocation()

  return (
    <div className='box'>
        <HeroSideBar style={{width: '6%'}}/>
     
            <div className='person'>
            
                {obj.map((item, i)=> {
                    if(item.id == location.pathname.split("/").at(-1) ) {
                        return  <div className='person__inner' key={i}>
                                    <div className='person__img-box'>
                                        <div className='person__img-inner'>
                                            <img className='person__avatar' src={item.avatar} alt="img" />
                                            <div className='person__info'>
                                                <h3 className='person__name'>
                                                    {item.name}
                                                </h3>
                                                <p className='person__data'>{item.data} 8 min read <button className='person__item-btn'>
                                                   <i className='bx bx-play-circle'></i>
                                                   Listen
                                                </button>
                                                </p>
                                            </div>
                                        </div>
                                        <div >
                                            <ul className='person__icons-list'>
                                            <BootstrapTooltip title="Share on Twitter" placement="top">
                                                <li  className='person__icons'>
                                                   <i className='bx bxl-twitter' ></i>
                                                </li>
                                            </BootstrapTooltip>
                                            <BootstrapTooltip title="Share on Facebook" placement="top">
                                                <li  className='person__icons'>
                                                <i className='bx bxl-facebook-circle'></i>
                                                </li>
                                            </BootstrapTooltip>
                                            <BootstrapTooltip title="Share on Linkedin" placement="top">
                                                <li  className='person__icons'>
                                                <i className='bx bxl-linkedin-square' ></i>
                                                </li>
                                            </BootstrapTooltip>
                                            <BootstrapTooltip title="Link" placement="top">
                                                <li  className='person__icons'>
                                                <i className='bx bx-link' ></i>
                                                </li>
                                            </BootstrapTooltip>
                                            <BootstrapTooltip title="Save" placement="top">
                                                <button  
                                                    className='person__icons ' >
                                                    <i className='bx bx-bookmark-plus'></i>
                                                </button>
                                            
                                            </BootstrapTooltip>
                                            <BootstrapTooltip title="More" placement="top">
                                                <li  className='person__icons'>
                                                <i className='bx bx-dots-horizontal-rounded'></i>
                                                </li>
                                            </BootstrapTooltip>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='person__main'>
                                        <h2 className='person__title'>{item.title}</h2>
                                        <p className='person__text'>{item.descInfo}</p>
                                        <img className='person__img' src={item.img} alt="img" />
                                        <p className='person__text'>
                                            {item.desc}
                                        </p>
                                    </div>   
                                    <div className='person__foot-btns'>
                                            <ul className='person__foot-list'>
                                                <li className='person__foot-item'>
                                                    <BootstrapTooltip title="Clap" placement="top">
                                                        <button className='person__foot-btn' onClick={()=>SetInterval()}>
                                                            <i className='bx bx-like'></i>
                                                        </button>      
                                                    </BootstrapTooltip>
                                                <p className='person__foot-count'>{count}</p>
                                                </li>
                                                <li className='person__foot-item'>
                                                    <BootstrapTooltip title="Respond" placement="top">
                                                        <button className='person__foot-btn' onClick={CanvasOpen}>
                                                           <i className='bx bx-message-rounded'></i>
                                                        </button>  
                                                    </BootstrapTooltip>
                                            <p className='person__foot-count'>23</p>
                                                </li>
                                            </ul>
                                            <BootstrapTooltip title="More" placement="top">
                                                <button className='person__foot-btn'>
                                                    <i className='bx bx-dots-horizontal-rounded' ></i>
                                                </button>      
                                            </BootstrapTooltip>
                                    </div>
                                    <div className='person__absolut'>
                                    </div>
                                    <Offcanvas   
                                            commitArrList={item.commitArr}      
                                            openOf={openOf}
                                            id={item.id}
                                            setOpenOf ={setOpenOf}
                                            CanvasOpen = {CanvasOpen}
                                            CanvasClose={CanvasClose}
                                            />
                            </div>
                                
                    }
                    })}

            </div>
    
            <HeroRight style={{width: '29%', }}/>
          
     </div>
  )
}

export default Person;