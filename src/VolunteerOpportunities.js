import { useState } from 'react'
import './App.css';
import Card from  './components/Card'
import ImageBanner from './components/ImageBanner/ImageBanner'
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
  <div className="App-container">
    <div>
        <ImageBanner/>
        <div className="volunteer-text">
          <h2>Volunteer Opportunities</h2>
          <p>Volunteers are the reason that any of the Refcode students succeed--both in the short term and in the long term. For every student who graduates, there is a whole team of volunteers who gave freely of their time, knowledge, expertise, and social capital in order to improve the life of someone who came into this country at a disadvantage.</p>
          <p>Use the interactive tool below to learn more about different ways that you can help out. </p>
          <p>
All volunteers must go through an application, screening, and orientation process before officially joining up, but we have worked hard to streamline the process and avoid wasting your valuable time. You will fill out an application form to give us a little more information about you and your background, you will submit or transfer a background check, and participate in an orientation and any applicable onboarding trainings.</p>
        </div>
    </div>
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
    </div>
  );
}


export default App;
