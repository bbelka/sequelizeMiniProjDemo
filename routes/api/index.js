const router = require('express').Router();
const travelerRoutes = require('./traveler');
const locationRoutes = require('./location');
const tripRoutes = require('./trip');

router.use('/travelers', travelerRoutes);
router.use('/locations', locationRoutes);
router.use('/trips', tripRoutes);

module.exports = router;