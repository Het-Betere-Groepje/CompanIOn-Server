import express from 'express';

import { getPlaces } from '../../controllers/v1/places.js';

const router = express.Router();

router.get('/', getPlaces);

export default router;