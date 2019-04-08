import React from 'react'

const DisplayQuotes = ({person }) => {
    return (
        <div className="DisplayQuotes">
        
           <h2>{person.quote}</h2> 
           <h2>{person.character}</h2>  
           <img src= {person.image} alt="simpson character" />
       
        </div>
    )
}

export default DisplayQuotes