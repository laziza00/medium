import './Write.scss'
import logoWrite from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'


let count = 100;
function Write({
    inputValue, 
    setInputValue, 
    isEmpty, 
    setIsEmpty, 
    email,
    text
}) {

// for textare
 const inputHandler = (e)=> {
  
    setIsEmpty(e.target.value)
}


const addPublish = () => {
    setInputValue([
        ...inputValue, {
            text: isEmpty,
            id: count
        }
    ])
    setIsEmpty('')
    count ++

}

  return (
    <div className='write'>
        <div className='container'>
            <div className='write__inner'>
                <div className='write__header'>
                    <div className='write__logo-box'>
                        <img className='write__logo' src={logoWrite} alt="img" />
                        <h3 className='write__email'>
                            Draft in {email}
                        </h3>
                    </div>
                    <div className='write__port'>
                    
                        <button className='write__publish-btn' onClick={addPublish}>
                            Publish
                        </button>
                        <button className='write__more'>
                            <i className='bx bx-dots-horizontal-rounded' ></i>
                        </button>
                        <button className='write__more' >
                             <i className='bx bx-bell'></i>
                        </button>
                        <Link style={{TextDecoration: 'none'}} to={'/portfolio'}>  
                            <button className='write__img-btn'>
                                <img src='https://picsum.photos/id/29/70/70' alt="img" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='write__main'>
                    <div className='write__input-box'>
                    <button className='write__input-btn'>
                       <i className='bx bx-plus'></i>
                    </button>
                        <div>
                            <input className='write__input' id="inputTitile" type="text" placeholder='Title' />
                            <textarea className='write__textarea' cols="120" rows="10" placeholder='Tell your story...'  onChange={inputHandler} value={isEmpty}></textarea>
                        </div>
                    </div>
           

                </div>
         
            </div>
        </div>
    </div>
  )
}

export default Write