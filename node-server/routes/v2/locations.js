import express from 'express';

import { getLocations } from '../../controllers/v2/locations.js';

const router = express.Router();

router.get('/', getLocations);

export default router;