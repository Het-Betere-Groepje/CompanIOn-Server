import express from "express";
import bodyParser from 'body-parser';


import v1Routes from './routes/v1.js';
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/v1', v1Routes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));