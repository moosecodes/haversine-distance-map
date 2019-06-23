var express = require('express');
const router = express.Router();

const {
  geoEncodeAPI,
  reverseGeoAPI,
  distanceAPI,
  directionsAPI,
} = require('../controllers');

router.post('/geocode/encode', geoEncodeAPI);
router.post('/geocode/reverse', reverseGeoAPI);
router.post('/geocode/distance', distanceAPI);
router.post('/geocode/directions', directionsAPI);

module.exports = router;
