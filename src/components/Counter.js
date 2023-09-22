import { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // Declaring the day variable
  let day;

  // Setting the value of the day variable conditionally
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

  // Getting the current date
  const date = new Date();

  // Using the setDate() function to add x number of days, the number of days
  // being equal to the value of count
  date.setDate(date.getDate() + count);

  // The handleReset() function handles resetting the inputs in the application
  // to their original state
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
        <div>
          <p>
            {count !== 0 && Math.abs(count)} {day} {date.toDateString()}
          </p>
          {/* 
            Conditionally rendering the reset button. It only gets rendered when 
            changes are made to the input fields as it is only needed at that point.
          */}
          {count !== 0 || step !== 1 ? (
            <button className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          ) : (
            <>{/* null can also be used here */}</>
          )}
        </div>
      </div>
    </div>
  );
}
