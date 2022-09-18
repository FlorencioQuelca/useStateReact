import React from 'react'

const QuoteBox = ({randomQuote}) => {
    console.log(randomQuote)
    
    const asd={
        backgroundColor: 'red'
    }
  return (
    <article className='card'>
        <p className='card__quote'>{randomQuote.quote}</p>
        <p className='card__author'>{randomQuote.author}</p>
        <button className='card__button'>&#62</button>
    </article>
  )
}

export default QuoteBox