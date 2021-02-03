import React from 'react'
import './style.css'
const PillButton = ( { text, backgroundColor, clickHandler }) => {
  return (
    <button className= {`pill-button pill-button--${backgroundColor}`} onClick={()=> clickHandler && clickHandler(text)}>
      { text }
    </button>
  )
}

export default PillButton
