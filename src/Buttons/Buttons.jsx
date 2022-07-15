function Buttons(props) {

  const {
    good, bad, neutral,
    setBad,setGood, setNeutral
  } = props

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
      <button onClick={IncreaseGood}>Good</button>
      <button onClick={IncreaseNeutral}>Neutral</button>
      <button onClick={IncreaseBad}>Bad</button>
    </div>
  )
}

export default Buttons
