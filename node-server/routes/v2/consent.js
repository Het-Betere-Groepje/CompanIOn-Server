import express from 'express';

import { getConsentLevels } from '../../controllers/v2/consent.js';

const router = express.Router();

router.get('/', getConsentLevels);

export default router;