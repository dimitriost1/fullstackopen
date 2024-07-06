import { useState } from 'react'

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
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </section>
    </>
  )
}

export default App