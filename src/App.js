//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const [homeScore, setHomeScore] = useState(7);
  const [awayScore, setAwayScore] = useState(14);
  //const [quarterNum, setQuarter] = useState(1);
  const [form, setForm] = useState({
    homeTeam: "",
    awayTeam: "",
    toGoYards: ""
  });

  //const [quarterNum, setQuarterNum] = useState(1);

  function handleChange(key, value) {
    setForm(prevState => {
      return { ...prevState, [key]: value };
    });
  }

  const [quarterNum, setQuarterNum] = useState(1);
  const [downNum, setDownNum] = useState(1);

  function increaseDown(){
    if(downNum < 4){
      setDownNum(downNum + 1);
    }
    else setDownNum(1);
  }
  
  function increaseQuarter(){
    if(quarterNum < 4){
      setQuarterNum(quarterNum + 1);
    }
    else setQuarterNum(1);
  }
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{form.homeTeamName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score"> {homeScore} </div>
          </div>
          <div className="timer">00:07</div>
          <div className="away">
            <h2 className="away__name">{form.awayTeamName}</h2>
            <div className="away__score"> {awayScore} </div>
          </div>
        </div>
        <BottomRow increaseDown={increaseDown} increaseQuarter={increaseQuarter} downNum={downNum} quarterNum={quarterNum} toGoYards={form.toGoYards}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() => setHomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => setHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => setAwayScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => setAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      <div className="allbuttons">
      <button onClick = {() => increaseQuarter()} className="quarterNumber">Increase Quarter</button>
      <button onClick = {() => increaseDown()} className="downNumber">Increase Down</button>
      </div>
     
      <div>
          <input
            id="homeTeamName"
            type="text"
            placeholder="Home team"
            onChange={e => handleChange("homeTeamName", e.target.value)}
          />
        </div>
       
        <div>
          <input
            id="awayTeamName"
            type="text"
            placeholder="Away team"
            onChange={e => handleChange("awayTeamName", e.target.value)}
          />
        </div>
        <div>        <input
            id="toGoYards"
            type="text"
            placeholder="Yards To Go"
            onChange={e => handleChange("toGoYards", e.target.value)}
          /></div>
        </section>
    </div>
  );
}

export default App;