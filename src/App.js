import React, { useState } from 'react'
import Statistics from './Statistics/statistic'

const App = () => {
  /* save clicks of each button to its own state */
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const IncreaseGood = () => {
    setGood (good +1)
  }
  const IncreaseNeutral = () => {
    setNeutral (neutral +1)
  }
  const IncreaseBad = () => {
    setBad (bad +1)
  }

  return (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <button onClick={IncreaseGood}>Good</button>
      <button onClick={IncreaseNeutral}>Neutral</button>
      <button onClick={IncreaseBad}>Bad</button>
      <br />
      <br />
      {good > 0 || neutral > 0 || bad > 0 ? <Statistics good={good} bad={bad} neutral={neutral}/> : 'Not feedback given'}
    </div>
  )
}

export default App;
