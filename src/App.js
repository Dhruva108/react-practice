import React, { useState } from 'react'
import Buttons from './Buttons/Buttons'
import Statistics from './Statistics/statistic'

const App = () => {
  /* save clicks of each button to its own state */
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <Buttons
      good={good} bad={bad} neutral={neutral}
      setBad={setBad} setGood={setGood} setNeutral={setNeutral}/>
      <br />
      <br />
      {good > 0 || neutral > 0 || bad > 0 ? <Statistics good={good} bad={bad} neutral={neutral}/> : 'Not feedback given'}
    </div>
  )
}

export default App;
