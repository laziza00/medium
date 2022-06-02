import React from 'react'
import './Portfolio.scss'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

function PortfolioHome(props) {

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
    <div className='portfolio__basic'>
    <ul className='portfolio__list'>
        <li className='portfolio__item'>
            <p className='portfolio__text'>{props.portValue}</p>
            <div className='portfolio__icons'>
                <div style={{display: 'flex'}} className="portfolio__hands">
                     <BootstrapTooltip title="Share on Twitter" placement="top" >
                         <li className="item">
                           <i class='bx bx-message-rounded'></i>
                         </li>
                     </BootstrapTooltip>
                     <BootstrapTooltip title="Share on Twitter" placement="top" >
                        <li className="item">
                           <i class='bx bxs-hand'></i>
                         </li>
                     </BootstrapTooltip>
                </div>
                <ul className='portfolio__socials'>
                   
                     <BootstrapTooltip title="Share on Twitter" placement="top">
                         <li className='portfolio__social-item '>
                             <i class='bx bxl-twitter'></i>
                         </li>
                     </BootstrapTooltip>
                 
                     <BootstrapTooltip title="Share on Facebook" placement="top">
                         <li className='portfolio__social-item '>
                              <i class='bx bxl-facebook' ></i>
                         </li>
                     </BootstrapTooltip>
                 
                     <BootstrapTooltip title=" Share on Linkedin" placement="top">
                         <li className='portfolio__social-item '>
                             <i class='bx bxl-linkedin-square' ></i>
                         </li>
                     </BootstrapTooltip>
                  
                     <BootstrapTooltip title="Link" placement="top">
                         <li className='portfolio__social-item '>
                              <i class='bx bx-link' ></i>
                         </li>
                     </BootstrapTooltip>
                 
                     <BootstrapTooltip title="Save" placement="top">
                         <li className='portfolio__social-item gray-item'>
                             <i class='bx bx-bookmark'></i>
                         </li>
                     </BootstrapTooltip>
                    
                     <BootstrapTooltip title="More" placement="top">
                         <li className='portfolio__social-item gray-item'>
                             <i class='bx bx-dots-horizontal-rounded' ></i>
                         </li>
                     </BootstrapTooltip>
                   

                </ul>
            </div>
        </li>
    </ul>
</div>
  )
}

export default PortfolioHome