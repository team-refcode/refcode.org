import './App.css';
import Card from  './components/Card'
import ImageBanner from './components/ImageBanner/ImageBanner'
import data from './components/data'

function App() {

  const cards = data.cards

  return (
  <div className="App-container">
    <div>
        <ImageBanner/>
        <div className="volunteer-text">
          <h2>Volunteer Opportunities</h2>
          <p>Volunteers are the reason that any of the Refcode students succeed--both in the short term and in the long term. For every student who graduates, there is a whole team of volunteers who gave freely of their time, knowledge, expertise, and social capital in order to improve the life of someone who came into this country at a disadvantage.</p>
          <p>All volunteers are screened and complete volunteer orientation and training process prior to working with students.</p>
        </div>
      <div className="App">
        <h2>Volunteer Roles</h2>
        <div className='grid'>
          { cards.map( (card, index) => <Card key={index} card = { card }/>)}
        </div>
        <form className="volunteer-form" action="https://formspree.io/f/xxxxxx" method="POST">
          <h2>Volunteer Interest Form</h2>
          <label className="quickinput">Name<br /> <input type="text" name="name" /></label>
          <label className="quickinput">Email<br /> <input type="email" name="email" /></label>
          <label className="quickinput">Phone (optional)<br /> <input type="tel" name="phone" /></label>
          <label className="quicktextarea">How did you hear about Refcode?<br /> <textarea name="referred-by" /></label>
          <label className="quicktextarea">If not in the Atlanta/Clarkston area, where are you located?<br /> <textarea name="location" /></label>
          <label className="quicktextarea">What motivates you to volunteer at Refcode? What background do you have that would be useful? Anything else you want to tell us, put it here!<br /> <textarea name="about" /></label>
          <label className="quicktextarea">What technical skills do you have? (You may want to share education, work experience, projects, etc.)<br /> <textarea name="tech-skills" /></label>
          <label className="quicktextarea">Are you able to come to Clarkston to volunteer in person?<br /> <textarea name="in-person" /></label>
          <div>
            <input type="submit" value="Submit" className="button" />
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}


export default App;
