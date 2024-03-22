import express from 'express';

//import consentRoutes from './v1/consent.js';
import locationRoutes from './v1/location.js';
import placesRoutes from './v1/places.js';

const router = express.Router();

//router.use('/consent', consentRoutes);
router.use('/location', locationRoutes);
router.use('/places', placesRoutes);

router.get('/', function (req, res, next) {
    console.log("Router Working");
    res.send("router working");
})

export default router;