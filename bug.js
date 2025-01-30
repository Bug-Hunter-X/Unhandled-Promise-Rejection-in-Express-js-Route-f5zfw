const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling missing here
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    setTimeout(() => reject(new Error('Something went wrong')), 100);
  });
}