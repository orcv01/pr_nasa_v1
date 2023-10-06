// Axccont Id 888608be-4c46-4c5b-8362-a12adc8d51cd
// Api Key JH1tOnIagCfaBo6CBWvIrVPw0JHTu6omcXqeHkly

import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Figure from './components/Figure/Figure';


const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "JH1tOnIagCfaBo6CBWvIrVPw0JHTu6omcXqeHkly";
  
   useEffect(() => {
const getApod = async () => {
const data = await axios.get(
`${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
);
setApod(data.data);
};
getApod();
}, [date]);
  

  const handleInput = (ev) => {
  setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className="App">
      <h1 className="title">
        NASA API <img src={'https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg'} className="logo" alt="NASA LOGO" />
      </h1>
      <h2>Astronomy Picture of the Day</h2>
      <input type="date" id="photo-date" onChange={handleInput} />
      {date > today ? (<h2>Please choose a previous date</h2>) 
      : (<Figure data={apod}/>)}
      <div className="standard-dialog center">
        <h2 className="dialog-text">@lethamburn - 2023 - <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></h2>
      </div>
  </div>
  )
};

export default App;

