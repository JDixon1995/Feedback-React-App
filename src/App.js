import './App.css';
import {useState} from 'react';
import Header from './Header.js'
import Button from './Button.js';
import Banner from './Banner.js';
import StatNum from './StatNum.js';


const App = () => {

  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);


  return (
    <div className="App">
      <Header />
      <Button text="good" />
      <Button text="neutral" />
      <Button text="bad" />
      <Banner />
      <StatNum text="good" />
      <StatNum text="neutral" />
      <StatNum text="bad" />
    </div>
  );
}

export default App;
