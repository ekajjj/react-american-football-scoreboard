import React, { useState } from "react";
import "./App.css";


function BottomRow() {
  const [quarterNum, setQuarterNum] = useState(1);
  const [downNum, setDownNum] = useState(1);

  const [form, setForm] = useState(8);
  function handleChange(key, value) {
    setForm(prevState => {
      return { ...prevState, [key]: value };
    });
  }


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downNum}</div>
        <button onClick = {() => setDownNum(downNum + 1)} className="downNumber">Increase Down</button>
        <button onClick = {() => setDownNum(downNum - 1)} className="downNumber">Decrease Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{form.toGoYards}</div>
        <input
            id="toGoYards"
            type="text"
            placeholder="Yards To Go"
            onChange={e => handleChange("toGoYards", e.target.value)}
          />
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterNum}</div>
        <button onClick = {() => setQuarterNum(quarterNum + 1)} className="quarterNumber">Increase Quarter</button>
        <button onClick = {() => setQuarterNum(quarterNum - 1)} className="quarterNumber">Decrease Quarter</button>
      </div>

    </div>
  );
};

// const BottomRow = () => {
//   return (
//     <div className="bottomRow">
//       <div className="down">
//         <h3 className="down__title">Down</h3>
//         <div className="down__value">3</div>
//       </div>
//       <div className="toGo">
//         <h3 className="toGo__title">To Go</h3>
//         <div className="toGo__value">7</div>
//       </div>
//       <div className="ballOn">
//         <h3 className="ballOn__title">Ball on</h3>
//         <div className="ballOn__value">21</div>
//       </div>
//       <div className="quarter">
//         <h3 className="quarter__title">Quarter</h3>
//         <div className="quarter__value">4</div>
//       </div>
//     </div>
//   );
// };

export default BottomRow;
