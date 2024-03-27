import express from 'express';

import { getUserLocation, putUserLocation , getLocations} from '../../controllers/v1/locations.js';

const router = express.Router();

router.get('/:id', getUserLocation);

router.get('/', getLocations);

router.put('/', putUserLocation);

export default router;