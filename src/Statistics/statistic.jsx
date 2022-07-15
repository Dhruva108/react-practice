import All from "./All"
import Avarage from "./Avarage"
import Bad from "./Bad"
import Good from "./Good"
import Neutral from "./Neutral"
import Positive from "./Positive"

const Statistics = (props) => {
  const {good, bad, neutral} = props
  return (
    <div>
      <h2>statistics</h2>
      <Good good={good}/>
      <Neutral Neutral={neutral}/>
      <Bad Bad={bad}/>
      <All All={bad + neutral + good}/>
      <Avarage Avarage={((bad * -1) + good) / (good + bad+ neutral)}/>
      <Positive Positive={good *100 / (good + bad+ neutral)}/>
    </div>
  )
}

export default Statistics
