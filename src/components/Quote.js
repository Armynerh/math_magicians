import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
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
          setQuote(data[0].quote);
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
      <h1>Quote of the Day</h1>
      <p><em>{quote}</em></p>
    </div>
  );
};

export default Quote;
