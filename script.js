// const quotes = [
//   "Believe you can 💪 - Steve",
//   "Dream big 🌟 - Unknown",
//   "Code is poetry 💻 - Dev"
// ];

// document.getElementById('quote-btn').addEventListener('click', () => {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   document.getElementById('quote-display').innerText = quotes[randomIndex];
// });


const quoteBtn = document.getElementById('quote-btn');
const quoteDisplay = document.getElementById('quote-display');

quoteBtn.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice?' + Math.random())
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      quoteDisplay.innerText = advice;
    })
    .catch(error => {
      quoteDisplay.innerText = 'Oops! Try again 😅';
      console.error(error);
    });
});
