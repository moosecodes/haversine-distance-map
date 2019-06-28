# Geocoding Challenge received recently (timestamps are in git log)

## Written by Mustafa Ishaq

Dear Coders @ The Marcus Buckingham Company,

Thank you for considering me as a candidate and for taking the time to review this code. I had a lot of fun thinking about this project and working on it.

This is a Node.js app that using the Express.js framework on the back end and Angular 8 on the front-end. The server listens to endpoints that geoencode addresses, reverse geoencode latitudinal and longitudinal coordinates, a distance calculator between two valid Google maps markers using the Haversine Formula of distance calculation on a spherical object, as well as provide turn-by-turn driving directions (feature is built in to the api but not on the front end in this version yet). The UI is dynamic and the markers update as the user changes the inputs.

I think that this app is pretty cool because the user can update the coordinates or street addresses and the map will update the markers in real time as the values are changed. There is no need to press a submit button to get the data from the APIs. When the page loads initially, the app will use the street addresses of my current location and the The Marcus Buckingham Companys' office in Beverly Hills to determine the coordinates for each location. The coordinates are retrived fairly quickly but if you look closely as the page is loaded, you will notice the coordinates update according to the addresses. The map is centered by default on 8350 Wilshire Blvd, Beverly Hills, CA.

I think the next version of this app (which will include Google Directions drawn on the map as lines) will provide some technical challenges. Firstly, I would like the next iteration of this app to use the users location based on information from their browser, instead of using my address as one of the default locations. Another set of technical issues could arise if the users request features for multiple points, as this program is only capable of handling two points effectively.

Please take some time to run the server and visit the front end of the site and play around with the inputs. The map is set to not zoom on scroll by default.

Here is a list of some of the features of this app:

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

Note: Please replace <YOUR-API-KEY> with your key!

Run nodemon to start server:

```bash
$ nodemon bin/www
```

Navigate in browser to: [http://localhost:3000](http://localhost:3000)

Thanks for your time and consideration! I hope to hear back from you soon!

Sincerely,
Moose
