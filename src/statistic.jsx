const Statistics = (props) => {
  const {good, bad, neutral} = props
  return (
    <div>
      <h2>statistics</h2>

        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {bad + neutral + good}</p>
        <p>Avarage: {((bad * -1) + good) / (good + bad+ neutral)}</p>
        <p>Positive: {good *100 / (good + bad+ neutral)}%</p>
    </div>
  )
}

export default Statistics
