import './App.css';
import React, {useState} from 'react';
import Header from './Header.js'
import Button from './Button.js';
import Banner from './Banner.js';
import Statistics from './Statistics.js';
import StatNum from './StatNum.js';

const App = () => {

  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ all, setAll ] = useState(0);
  const [ rating, setRating ] = useState(0);

  const average = rating / all;
  const positive = good / rating;

  const handleGoodClick = () => {
    setGood( good + 1);
    setAll( all + 1)
    setRating( rating + 1 );
  }

  const handleNeutralClick = () => {
    setNeutral( neutral + 1);
    setAll( all + 1);
    setRating( rating + 0);
  }

  const handleBadClick = () => {
    setBad( bad + 1);
    setAll( all + 1);
    setRating( rating - 1);
  }


  return (
    <div className="App">
      <Header />
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <Banner />
      <StatNum text="good" counter={good} />
      <StatNum text="neutral" counter={neutral} />
      <StatNum text="bad" counter={bad} />
      <StatNum text="all" counter={all} />
      <StatNum text="average" counter={average} />
      <StatNum text="positive" counter={positive} />
    </div>
  );
}

export default App;
