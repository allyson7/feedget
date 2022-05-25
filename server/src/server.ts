import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET, POST, PUT, DELETE
// GET = buscar informaçÕES
// POST = cafastrar isformações

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server runnning!');
})
