var express = require('express');
const router = express.Router();

const {
  renderMainPage,
  geoEncodeAPI,
  reverseGeoAPI,
  distanceAPI,
} = require('../controllers');

router.get('/', renderMainPage);
router.post('/geocode/encode', geoEncodeAPI);
router.post('/geocode/reverse', reverseGeoAPI);
router.post('/geocode/distance', distanceAPI);

module.exports = router;

// module.exports.api = () => {
//   // const router = express.Router();
//   // Geocoding routes

//   return router;
// };
// module.exports.pages = () => {
//   // const router = express.Router();
//   // router.get('/', renderMainPage);
//   router.get('/', function(req, res, next) {
//     res.send('welcome home');
//   });
//   router.get('/moose', function(req, res, next) {
//     res.send('welcome moose');
//   });
//   return router;
// };
