import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {

  const all = good + bad + neutral

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good - bad) / all}</p>
      <p>positive {(good / all) * 100} %</p>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const setButtonsState = (button) => {
    switch (button) {
      case "good":
        return () => setGood(good + 1)
      case "neutral":
        return () => setNeutral(neutral + 1)
      case "bad":
        return () => setBad(bad + 1)
      default:
        break;
    }
  }

  return (
    <>
      <section className='feedback'>
        <h2>give feedback</h2>
        <button onClick={setButtonsState("good")}>good</button>
        <button onClick={setButtonsState("neutral")}>neutral</button>
        <button onClick={setButtonsState("bad")}>bad</button>
      </section>
      <section className='statistics'>
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </section>
    </>
  )
}

export default App