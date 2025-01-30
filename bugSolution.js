const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(next);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000, () => console.log('Server listening on port 3000'));

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Something went wrong')), 100);
  });
} 