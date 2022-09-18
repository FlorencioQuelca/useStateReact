import React from 'react'

const QuoteText = ({randomQuote,randomColor}) => {
  return (
    <div>
        <div className='paragraph'>
            <div className='q'>
                 <p >&#8220;</p>
            </div>
           <p  className='card__quote'>{randomQuote.quote}</p>
        </div>
        <h1  className='card__author'>{randomQuote.author}</h1>
        
    </div>
  )
}

export default QuoteText