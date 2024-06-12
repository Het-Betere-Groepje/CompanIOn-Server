import express from 'express';

import locationRoutes from './v2/locations.js';
import consentRoutes from './v2/consent.js';
import userRoutes from './v2/user.js';

const router = express.Router();

router.use('/locations', locationRoutes);
router.use('/consent', consentRoutes);
router.use('/user', userRoutes);

router.get('/', function (req, res, next) {
    console.log("Router Version 2 Working");
    res.send("Router Version 2 working");
})

export default router;