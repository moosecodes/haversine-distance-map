# Geocoding Google Map

Express server connects to Google Maps API and Google Directions API to display distance between two points.  Direct distance is calculated using the Haversine Formula.  Directions API is used for turn by turn directions (API connected but feature not implemented on the front end, yet).

## Features

- Geoencode addresses on input change
- Reverse Geoencode coordinates on input change
- Haversine distance calculations between the two points
- Uses [https://angular-maps.com/](Angular Google Maps)
- Google Map with markers that update on the fly
- Markers have ballon text that can be customized
- Coming Soon: Google Directions API with driving distance (API already built)

## Installing

Install depenencies using npm:

```bash
$ npm install
```

Install dependecies using yarn:

```bash
$ yarn
```

Create .env file in root directory with the following contents:

```bash
API_URL=https://maps.googleapis.com/maps/api/geocode/json?
API_KEY=<YOUR-API-KEY>

DIRECTIONS_URL=https://maps.googleapis.com/maps/api/directions/json?
```

Note: Please replace '<YOUR-API-KEY>' with your key!

Run nodemon to start server:

```bash
$ nodemon bin/www
```

Navigate in browser to: [http://localhost:3000](http://localhost:3000)
