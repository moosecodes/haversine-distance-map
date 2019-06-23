const axios = require('axios');
const { API_KEY, API_URL } = process.env;

module.exports = {
  geoEncodeAPI(req, res, next) {
    const address = req.body.address;
    if (address) {
      axios
        .get(API_URL, {
          params: {
            address,
            key: API_KEY,
          },
        })
        .then(function(response) {
          const coords = response.data.results[0].geometry.location;
          res.send({ coords });
        })
        .catch(function(error) {
          res.send('An error occurred while geoencoding');
        })
        .then(function() {
          // always executed
        });
    } else {
      res.send('Please provide a valid address');
    }
  },
  reverseGeoAPI(req, res, next) {
    const latlng = req.body.latlng;
    if (latlng) {
      axios
        .get(API_URL, {
          params: {
            latlng,
            key: API_KEY,
          },
        })
        .then(function(response) {
          const addr = {
            address: response.data.results[0].formatted_address,
          };
          res.send(addr);
        })
        .catch(function(error) {
          res.send('An error occurred while geoencoding');
        })
        .then(function() {
          // always executed
        });
    } else {
      res.send('Please provide valid coordinates');
    }
  },
  distanceAPI(req, res, next) {
    let { latlng1, latlng2 } = req.body;
    latlng1 = latlng1.split(', ');
    latlng2 = latlng2.split(', ');

    const radiusOfEarth = {
      miles: 3958.756,
      km: 6371,
    };

    res.send(
      `x1 = ${latlng1[0]}, y1 = ${latlng1[1]}\nx2 = ${latlng2[0]}, y2 = ${
        latlng2[1]
      }`
    );
  },
  renderMainPage(req, res, next) {
    res.render('index', { title: 'Peakers Geocoding Challenge' });
  },
};
