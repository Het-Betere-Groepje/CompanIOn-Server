import express from 'express';

import locationRoutes from './v1/locations.js';

const router = express.Router();

router.use('/locations', locationRoutes);

router.get('/', function (req, res, next) {
    console.log("Router Version 1 Working");
    res.send("Router Version 1 working");
})

export default router;