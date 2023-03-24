// Define a function to fetch a random quote from the API
async function fetchQuote() {
  // Fetch the quotes from the API
  const response = await fetch('https://type.fit/api/quotes');
  const quotes = await response.json();

  // Select a random quote from the array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Return the quote object
  return quote;
}

// Define a function to display the quote on the web page
function displayQuote(quote) {
  // Find the HTML elements to display the quote and author
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');

  // Set the innerHTML of the elements to display the quote and author
  quoteElement.innerHTML = quote.text;
  authorElement.innerHTML = `-${quote.author}` || 'Unknown'; // Use "Unknown" if author is missing
}

// Call the fetchQuote function and display the quote on the web page
fetchQuote()
  .then(quote => {
    displayQuote(quote);
  })
  .catch(error => {
    console.error('Error fetching quote:', error);
  });
