const axios = require('axios');
const { API_KEY, API_URL } = process.env;

Number.prototype.toRad = function() {
  return (this * Math.PI) / 180;
};

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
    let { start, end } = req.body;
    start = start.replace(/ /g, '');
    start = {
      lat: Number(start.split(',')[0]),
      long: Number(start.split(',')[1]),
    };
    end = end.replace(/ /g, '');
    end = {
      lat: Number(end.split(',')[0]),
      long: Number(end.split(',')[1]),
    };
    const radii = {
      mi: 3958.756,
      km: 6371,
      ft: 20902000,
    };
    const unit = 'km';

    const dLat = (end.lat - start.lat).toRad();
    const dLon = (end.long - start.long).toRad();
    const lat1 = start.lat.toRad();
    const lat2 = end.lat.toRad();

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = radii[unit] * c;

    res.send({ distance, unit, start, end });
  },
};
