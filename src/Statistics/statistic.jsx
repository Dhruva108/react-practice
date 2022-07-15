import All from "./All"
import Avarage from "./Avarage"
import Bad from "./Bad"
import Good from "./Good"
import Neutral from "./Neutral"
import Positive from "./Positive"

const Statistics = (props) => {

  const {good, bad, neutral} = props

  // const table = [
  // {
  //   name: "Good",
  //   value: good
  // },
  // {
  //   name: "Bad",
  //   value: bad
  // },
  // {
  //   name: "Neutral",
  //   value: neutral
  // },
  // {
  //   name: "All",
  //   value: All
  // },
  // {
  //   name: "avarge",
  //   value: Neutral
  // },
  // {
  //   name: "Positive",
  //   value: Positive
  // },
  // ]


  return (
    <div>
      <h2>statistics</h2>
      <table border={1}>
        <tbody>
          <tr>
            <td>Good</td>
            <td><Good good={good}/></td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td><Neutral Neutral={neutral}/></td>
          </tr>
          <tr>
            <td>Bad</td>
            <td><Bad bad={bad}/></td>
          </tr><tr>
            <td>All</td>
            <td><All all={bad + neutral + good}/></td>
          </tr><tr>
            <td>Avarage</td>
            <td><Avarage avarage={((bad * -1) + good) / (good + bad+ neutral)}/></td>
          </tr><tr>
            <td>Positive</td>
            <td><Positive positive={good *100 / (good + bad+ neutral)}/></td>
          </tr>
          </tbody>
      </table>
    </div>
  )
}

export default Statistics
