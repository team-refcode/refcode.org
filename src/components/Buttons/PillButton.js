import React from 'react'
import './style.css'
const PillButton = ( { text, backgroundColor, clickHandler }) => {
 
  return clickHandler ?  
    <button className= {`pill-button pill-button--${backgroundColor}`} onClick={()=> clickHandler && clickHandler(text)}>
      { text }
    </button>
  : 
  <div className= {`card__pill-button pill-button--${backgroundColor}`} >
      { text }
  </div>
}

export default PillButton
