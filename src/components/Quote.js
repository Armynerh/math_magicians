import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'computers';
    const apiKey = 'sF5majFYoUyJx0m8Vs3zVw==7L46u3vTOLHNIGa0';
    const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

    fetch(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setQuotes(data);
        } else {
          setError('No quotes available');
        }
      })
      .catch(() => {
        setError('Error fetching quotes');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Quotes of the Day</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={uuidv4()}>
            {quote.quote}
            -
            {quote.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quote;
