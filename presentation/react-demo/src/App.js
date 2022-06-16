import React, { useState} from 'react';
import Quote from "./components/Quote";

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
  })

  const fecthQuote =async () => {
    return await fetch('https://animechan.vercel.app/api/random')
      .then(response => response.json())
  }

  const generate = async () => {
    setQuote(await fecthQuote());
  }

  return (
    <div className="App">
      <Quote quote={quote} />

      <button onClick={generate}> Generate new quote</button>
    </div>
  );
}

export default App;
