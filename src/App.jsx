import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setQuote(data.slip.advice);
      setAuthor("Unknown"); // Setting a default since Advice Slip API has no author
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Sorry, we couldn't fetch a quote at this time. Please try again later.");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchQuote(); // Load a quote on initial render
  }, []);

  return (
    <>
     <div className="container-fluid" style={{ background: 'black', width: '100%', height: '100vh' }}>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8  mt-5">
          <h2 className='text-white text-center mt-5'>Random Quote Generator</h2>
          <p className='text-center text-white mt-3'>"{quote}"</p>
          <p className='text-center text-white mt-3'>"{author}"</p>
          <div className='d-flex align-items-center justify-content-center mt-5'><button onClick={fetchQuote} className='btn btn-success'>Generate Quote</button></div>
        </div>
        <div className="col-md-2"></div>
      </div>
     </div>
    </>
  );
}

export default App;
