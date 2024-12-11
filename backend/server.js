const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
// Hardcoded array of dog breeds
const dogBreeds = [
  'Labrador Retriever',
  'German Shepherd',
  'Golden Retriever',
  'Bulldog',
  'Beagle',
  'Poodle',
  'Rottweiler',
  'Yorkshire Terrier',
  'Boxer',
  'Dachshund',
];

// Endpoint to return the array of dog breeds
app.get('/dogbreeds', (req, res) => {
  res.json(dogBreeds);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
