import React from 'react'
import QuoteText from './QuoteText'

const QuoteBox = ({randomQuote,randomColor,getRandomAll}) => {
    console.log(randomQuote)
    console.log(randomColor)
    console.log(getRandomAll)
    
    const color={
        color: randomColor
    }
    const background={
        backgroundColor:randomColor
    }
    
  return (
    <article style={color} className='card'>

        <QuoteText
           randomQuote={randomQuote}
           randomColor={randomColor}
         />
        <button style={background}  onClick={getRandomAll} className='card__btn'>&#62;</button>
    </article>
  )
}

export default QuoteBox