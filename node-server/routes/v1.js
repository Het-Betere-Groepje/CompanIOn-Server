import express from 'express';

import locationRoutes from './v1/locations.js';

const router = express.Router();

router.use('/locations', locationRoutes);

router.get('/', function (req, res, next) {
    console.log("Router Working");
    res.send("router working");
})

export default router;