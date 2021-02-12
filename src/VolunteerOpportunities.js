import { useState } from 'react'
import './App.css';
import Card from  './components/Card'
import { PillButton } from './components/Buttons'
import data from './components/data'

function App() {

  const [cards, setCards ] = useState(data.cards)

  const filterByCategory = (text) =>{
   let filtered = data.cards.filter(card => card.categories.includes(text))
   setCards(filtered)
  }

  const filterBySkill = (text) =>{
    let filtered = data.cards.filter(card => card.skills.includes(text))
    setCards(filtered)
   }

  return (
    <div className="App">
      <div>
        <div className='filter-wrapper'>
          <div>Filter roles by category:</div>
          <div className="buttons-wrapper">
            {data.categories.map((category, index) => <PillButton key={index} text={category.text} backgroundColor={category.backgroundColor} clickHandler = { filterByCategory }/>)}
          </div>
        </div>
        <div  className='filter-wrapper' >
          <div>Filter roles by required skills or resources:</div>
          <div className="buttons-wrapper">
            {data.skills.texts.map((text, index) => <PillButton key={index} text={text} backgroundColor={data.skills.backgroundColor} clickHandler = { filterBySkill }/>)}
          </div>
      </div>
      </div>

      <div className='grid'>
        { cards.map( (card, index) => <Card key={index} card = { card }/>)}
      </div>
    </div>
  );
}


export default App;
