import React,{useCallback, useEffect} from 'react'
import "./Modal.css"

const Modal = ({showModal,setshowModal}) => {
    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal){
            setshowModal(false)
        }
    },[setshowModal,showModal])

    useEffect (()=> {
        document.addEventListener('keydown',keyPress);
        return () => document.removeEventListener('keydown',keyPress)
        },[keyPress])
  return (
    <>
    {showModal
    ?
    <div>
        {/* <div className='Background' */}
      <div class="popup">
                
                <div class="content">
                 
                  <ul class="icons">
                    <a href="/"><i class="fab fa-linkedin-in"></i></a>
                    <a href="/"><i class="fab fa-whatsapp"></i></a>
                    <a href="/"><i class="fab fa-telegram-plane"></i></a>
                  </ul>
                  <p>Or copy link</p>
                  <div class="field">
                    <i class="url-icon uil uil-link"></i>
                    <input
                      type="text"
                      readonly
                      value="example.com/share-link"
                    />
                    <button>Copy</button>
                  </div>
                </div>
              </div>
    </div>
    : <></>
    }
    </>
  )
}

export default Modal
