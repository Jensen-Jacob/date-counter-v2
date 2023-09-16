import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  let day;

  if (count > 0) {
    if (count === 1) {
      day = "day from today is";
    } else {
      day = "days from today is";
    }
  } else if (count < 0) {
    if (count === -1) {
      day = "day ago from today was";
    } else {
      day = "days ago from today was";
    }
  } else {
    day = "Today is";
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="flex-container">
      <div className="flex-item">
        <div>
          <p> Step: {step} </p>
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </div>
        {/* <div> */}
        <div className="count-div">
          <p> Count: </p>
          <button onClick={() => setCount((c) => c - step)}>&minus;</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={() => setCount((c) => c + step)}>&#43;</button>
        </div>
        {/* </div> */}
        <div>
          <p>
            {count !== 0 && Math.abs(count)} {day} {date.toDateString()}
          </p>
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
