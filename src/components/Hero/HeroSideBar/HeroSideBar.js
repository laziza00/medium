import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './HeroSideBar.scss'
import  logo from '../../../assets/images/logo.png'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

function HeroSideBar() {

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
    <div className='sidebar'>
      <div className='sidebar__inner'>
            <div className='sidebar__logo-box'>
                <NavLink to={'/main'} style={{textDecoration: "none"}} >
                    <img className='sidebar__logo' src={logo}/>
                </NavLink>
              </div>
            
              <ul className='sidebar__list'>

                <NavLink to={'/main'} style={{textDecoration: "none"}} className='sidebar__item'>
                    <BootstrapTooltip  title="Home" >
                         <i className='bx bx-home'></i>
                    </BootstrapTooltip>
                </NavLink>
            
            
                <NavLink to={'/Notification'} style={{textDecoration: "none"}} className='sidebar__item'>
                    <BootstrapTooltip  title="Notifications" >
                        <i className='bx bx-bell'></i>
                    </BootstrapTooltip>
                </NavLink>
         
                <NavLink to={'/savelist'} style={{textDecoration: "none"}} className='sidebar__item'>
                    <BootstrapTooltip  title="Lists" >
                         <i className='bx bx-bookmarks'></i>
                    </BootstrapTooltip>
                </NavLink>

                <NavLink to={'/stories'} style={{textDecoration: "none"}} className='sidebar__item'>
                    <BootstrapTooltip  title="Stories" >
                        <i className='bx bx-notepad'></i>
                    </BootstrapTooltip>
                </NavLink>

                <NavLink to={'/write'} style={{textDecoration: "none"}} className='sidebar__item'>
                  <BootstrapTooltip title="Write" placement="right">
                      <i className='bx bx-edit'></i>
                  </BootstrapTooltip>
                </NavLink>
         
              </ul>
              <div className='sidebar__btn-box'>

              <NavLink  to={'/portfolio'} style={{textDecoration: "none"}} className='sidebar__item'>
                  <BootstrapTooltip title="Portfolio" placement="right">
                    <button className='sidebar__btn'>
                        <i className='bx bxs-user-circle'></i>
                    </button>
                  </BootstrapTooltip>
                </NavLink>
             
              </div>
            </div>
      </div>
    
  )
}

export default HeroSideBar