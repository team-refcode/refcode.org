import React from 'react'
import './style.css'
const PillButton = ( { text, backgroundColor, clickHandler }) => {
 
  return clickHandler ?  
    <button className= {`pill-button pill-button--${backgroundColor}`} onClick={()=> clickHandler && clickHandler(text)}>
      { text }
    </button>
  : 
  <button className= {`card__pill-button pill-button--${backgroundColor}`} >
      { text }
  </button>
}

export default PillButton
