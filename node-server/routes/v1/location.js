import express from 'express';

import { getLocation, putLocation } from '../../controllers/v1/location.js';

const router = express.Router();

//router.get('/', getLocations);

router.get('/:id', getLocation);

router.put('/', putLocation);

export default router;