//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, setHomeScore] = useState(0);
  
  // let [awayName, setAwayName] = useState("Tigers");
  let [awayScore, setAwayScore] = useState(0);
  
  // game scores
  let [quarter, setQuarter] = useState(1);
  let [downs, setDowns] = useState(1);

 const stopQuarter = () => quarter >= 4 
  ? setQuarter(1) 
  : setQuarter(quarter + 1);

  const downsCount = () => downs >= 4 
  ? setDowns(1) 
  : setDowns(downs + 1);
  
  

  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>

        <BottomRow gameQuarter = {quarter} gameDowns = {downs} />

      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
        <div className="gameButtons">
          <button className="quarterButton" onClick={stopQuarter}>Quarter</button>   
        </div>
        <div className="gameButtons">
          <button className="downsButton" onClick={downsCount}>Downs</button>   
        </div>
         
        <div>
          <button className="reset" onClick={() => [setHomeScore(0), setAwayScore(0), setQuarter(1)] }>RESET</button>       
        </div>   
       
      </section>
    </div>
  );
}

export default App;
