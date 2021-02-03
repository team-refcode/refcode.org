import React from 'react'
import './style.css'
import { PillButton, FilloutButton} from '../Buttons'
import data from '../data'

const Card = ({ card }) => {
  return (
  <div className='card'>
    <div style={{height:'80%'}} className='flex-col'>
      <div>{ card.title }</div>
      <div>{ card.program }</div>
      <div>
        {card.categories.map((category, index) => <PillButton  key={index} text={category} backgroundColor={ findBackgroundColor(category)}/>)}
        {card.skills.map((skill,index) => <PillButton key={index} text={skill} backgroundColor = { data.skills.backgroundColor }/>)}
      </div>
      <div>
        <span>description:</span>
        <p>
         {card.description}
        </p>
      </div>
      <div className="fillout-button-wrapper">
        <FilloutButton/>
      </div>
    </div>
  </div>
  )
}


function findBackgroundColor(text){
  let category = data.categories.find(category => category.text === text )
  return category ? category.backgroundColor: ''
}

export default Card

