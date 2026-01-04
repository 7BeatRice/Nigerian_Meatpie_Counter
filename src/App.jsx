import "./App.css";
import meatPieImage from './assets/meatPie-removebg-preview.png';
import {useState} from 'react';


const App = () =>{
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const  [doubleStuff, setDoubleStuff] = useState(100);
  const [partyPark, setPartyPark] = useState(2000);
  const [fullFest, setFullFest] = useState(10000);



  const updateCount = () =>setCount(count + multiplier);
  const buyDoubleStuff = () =>{
    if (count >= doubleStuff){
      setMultiplier(multiplier * 2);
      setCount(count - doubleStuff );
      setDoubleStuff(doubleStuff + 100);
    }
  }
  const buyPartyPark = () =>{
    if (count >= partyPark){
      setMultiplier(multiplier * 3);
      setCount(count - partyPark );
      setPartyPark(partyPark + 2000);
    }
  }
    const buyFullFest = () =>{
    if (count >= fullFest){
      setMultiplier(multiplier * 5);
      setCount(count - fullFest );
      setFullFest(fullFest + 10000);
    }
  }
  return(
    <div className="App">
      <div className="header">
        <h1>Meatpie Counter</h1>
        <div className="stats">
          <h2>Count: {count}</h2>
          <h2>Click Multiplier: {multiplier}</h2>
        </div>
        <img className="meatpie" alt="A Nigerian meatpie with flaky buttery outside and meat wih vegetables filling" src={meatPieImage} onClick={updateCount}/>
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuff}>{doubleStuff} Meatpies</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>3x per click</p>
          <button onClick={buyPartyPark}>{partyPark} Meatpies</button>
        </div>
        <div className="upgrade">
           <h3>Full Feast 👩🏽‍🍳</h3>
          <p>5x per click</p>
          <button onClick={buyFullFest}>{fullFest} Meatpies</button>
        </div>
      </div>
    </div>
  )
}
export default App;