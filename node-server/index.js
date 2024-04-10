import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";

import v1Routes from './routes/v1.js';
import v2Routes from './routes/v2.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/v1', v1Routes);
app.use('/v2', v2Routes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}/v2/`));