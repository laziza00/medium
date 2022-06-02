import './ModalCheck.scss'
import Checkbox from '@mui/material/Checkbox';
import obj from '../../../Object'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react'
import CreateModal from '../../CreateText/CreateText'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function ModalCheck(props) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [bigModalOpen, setBigModalOpen] = useState();
  



  const checkHandler =(el)=> {
    obj.map((item, i)=> {
      if(item.id ===el) {
        if(item.trueOrFalse === true) {
           return item.trueOrFalse =false
        }
        if(item.trueOrFalse === false) {
           return item.trueOrFalse = true
        }
      }
      console.log(obj);
    })
  }

  return (
            <div className="modal" style={{display: props.open !== props.id ? 'none': 'block'}}>
              <ul className="modal__list">
              {props.bigSave && props.bigSave.map((item, i)=> {
                return (
                  <li className="modal__item" key ={i}>
                      <div className="modal__name">
                            <div className='modal__check' key={i} >
                          
                                <Checkbox {...label} onClick={()=>checkHandler(props.id)} />
                            </div>
                      </div>
                      <p className='modal__read-text'>{item.name}</p>
                      <div className="modal__icon">
                          <i className='bx bxs-lock-alt'></i>
                      </div>
                  </li>
                      )
                      })}
              </ul>
          <div>  
            <button onClick={handleOpen} className="modal__btn">Create add list</button>
            <div style={{display: bigModalOpen !==props.id ? 'none': 'block'}} ></div>
            <CreateModal
                open={open}
                setOpen ={setOpen}
                handleOpen = {handleOpen}
                handleClose={handleClose}
                bigSave ={props.bigSave}
                setBigSave ={props.setBigSave}
                />
            </div>
        </div>

  )
}

export default ModalCheck