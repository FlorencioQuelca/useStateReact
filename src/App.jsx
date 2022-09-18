
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './utils/colors'
function App() {

  const getIndexRandom= array => Math.floor(Math.random() * array.length)
  const firstElementRandomQuote = quotes[getIndexRandom(quotes)]
  const firstElementRandomColor = colors[getIndexRandom(colors)]
  const [randomQuote, setRandomQuote] = useState(firstElementRandomQuote)
  const [randomColor, setRandomColor] = useState(firstElementRandomColor)
 

    console.log(firstElementRandomColor)
  console.log(randomQuote)

  const chance={
    backgroundColor: randomColor
  }
  const getRandomAll=()=>{
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(colors[getIndexRandom(colors)])
  }
  return (
    <div style={chance} className="App">
      <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
