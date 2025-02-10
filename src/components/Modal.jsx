import React from 'react'

function Modal({open, onClose, children}) {

    if(!open) return null;

  return (
    <div>
        <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40 bg-transparent w-fit h-fit'>{children}</div>
        <div className='fixed top-0 left-0 w-[100%] h-[100%] bg-black/90 z-30' onClick={onClose}></div>
    </div>
  )
}

export default Modal