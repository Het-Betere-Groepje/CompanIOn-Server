import express from 'express';

import { getUserLocation, putUserLocation, getUserConsent, patchUserConsent, getUserWithLocation} from '../../controllers/v2/user.js';

const router = express.Router();

router.get('/location/:id', getUserLocation);
router.get('/userWithLocation/:name', getUserWithLocation);
router.put('/location', putUserLocation);
router.get('/consent/:id', getUserConsent);
router.patch('/consent', patchUserConsent);

export default router;