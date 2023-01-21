import React from 'react'
import './arrow.css'
import {AiOutlineArrowUp} from 'react-icons/ai'

function ArrowUp() {
  return (
    <div className='arrow-container container'>
        <div className='arrow-up'>
            <div className='arrow-wrap'>
                <a href="#top"> 
            <AiOutlineArrowUp size={50} color="black" /></a> 
            </div>
        </div>
    </div>
  )
}

export default ArrowUp