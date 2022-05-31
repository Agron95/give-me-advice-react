import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';


const App = () => {
  const [advice, setAdvice] = useState('')
  
  const test = () => {
    console.log('tests')
  }

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice')
      //console.log(response)
      setAdvice(response.data.slip.advice)
    } catch (error) {
      console.log(error.message)
    }
    
  }

  useEffect(() => {
    fetchAdvice()
  }, [])
  


  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={ (e) => fetchAdvice()}>Give me a advice</button>

    </div>
    
  );
}

export default App;



// import './App.css';
// import { useState } from 'react';
// //import getQuotes from './getQuotes';
// import { Button, Card, CardComponent, Typography } from '@material-ui/core'
// import quotes from './quotes1.json'
// function App() {

//   const [quote, setQuote] = useState(quotes[0].quote)
//   const [author, setAuthor] = useState(quotes[0].author)

//   const handleClick = () => {
//     const random = Math.floor( Math.random() * 51 ) 
//     setQuote(quotes[random].quote)
//     setAuthor(quotes[random].author)
//     //console.log(quotes)
//     //JSON.stringify(quotes)  (object ----> json)
//     //JSON.parse(quotes) (json ----> object)
    


//   }
//   return (
//     <div className="App">
//       <Typography variant="h2">Random Quote Generator</Typography>
//       <Card className="card">
//         <Typography variant="h5">{ quote }</Typography>
//         <Typography className="margin-top" color="textSecondary">{ author }</Typography>
//         <hr />
//         <Button color="primary" onClick ={() => handleClick()}>Click for Quotes</Button>
//       </Card>
    
    
//     </div>
//   );
// }

// export default App;
