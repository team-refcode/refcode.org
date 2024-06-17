import React from 'react'
import './style.css'
import { PillButton } from '../Buttons'
import data from '../data'

const Card = ({ card }) => {
  return (
  <div className='card'>
    <div className='card-header'>
      <h1 className="title">{ card.title }</h1>
      <h2 className="program">{ card.program }</h2>
    </div>
    <div className='card-pills'>
      {card.categories.map((category, index) => <PillButton  key={index} text={category} backgroundColor={ findBackgroundColor(category)}/>)}
    </div>
    <div className="card-body">
      <div className='description'>
        <h3 className="description-heading">Description</h3>
        <p>
         {card.description}
        </p>
        <h3 className="description-heading">Requirements</h3>
        <p>
         {card.requirements}
        </p>
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
