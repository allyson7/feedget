import express from 'express';

const app = express();

// GET, POST, PUT, DELETE
// GET = buscar informaçÕES
// POST = cafastrar isformações

app.post('/feedbacks', (req, res) => {
  return res.send('Hello Rocketseat!');
})

app.listen(3333, () => {
  console.log('HTTP server runnning!');
})
