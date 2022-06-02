import React, { useRef, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import './CreateText.scss'
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  boxShadow: 24,
  p: 4,
  px: 4,
  pb: 3,
};



export default function CreateModal({open, handleClose, bigSave, setBigSave}) {

const inputRef = useRef()
const [sum, setSum] = useState(0)

let count =1
  const inputHandler = (e)=> {
    console.log(e.target.value);
    setBigSave([
      ...bigSave,
      {
        name : inputRef.current.value,
        id: count,
      }
    ])
    count ++;
  }
const inputCount =(e)=> {
  setSum(sum +1)
  if(sum==60) {
    return sum = 0
  }
}



  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{...style, width: 800, height: 600}}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className='createModal'>
                <h1 className='createModal__title'>Create new list</h1>
                <div>
                  <form className='createModal__form'>
                    <input  ref ={inputRef} onChange={inputCount} className='createModal__inputText' type="text" minLength={0} maxLength= {60} placeholder="Give it a name" required/>
                    <p className='createModal__count'>{sum}/60</p>
                  </form>
                  <button className='createModal__inputDesc'>Add description</button>
           
                  <div className='createModal__chekkedBox'>
                    <Checkbox Checked />
                    <label>Make it private</label>
                  </div>
                </div>
                <div className='createModal__btnss'>
                  <button className='createModal__cancel' onClick={handleClose}>Cancel</button>
                  <button className='createModal__cansel' onClick={inputHandler}>Create</button>
                </div>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

