// router.js
const { API_KEY, SECRET_KEY } = require("../config");
const Amadeus = require("amadeus");
const express = require("express");
//const router = express.Router();
const traveller =  {
    id: "1",
    dateOfBirth: "1985-10-08",
    gender: "FEMALE",
    name: {
      firstName: "Renu",
      lastName: "Yadav",
    },
    contact: {
      emailAddress: "renu.yadav@publicissapient.com",
      phones: [
        {
          deviceType: "MOBILE",
          countryCallingCode: "91",
          number: "9008466353",
        },
      ],
    }
}

//this will search data from amaedus api
module.exports = function (app) {
  app.get("/flightSearch", function (req, res) {
    //response.send("Simple Call users Route from Here!");
    // ...
    // Create Amadeus API client
    const amadeus = new Amadeus({
      clientId: API_KEY,
      clientSecret: SECRET_KEY,
    });
    
    // ...
    const originCode = req.query.originCode;
    const destinationCode = req.query.destinationCode;
    const dateOfDeparture = req.query.dateOfDeparture;
    const dateOfArrival = req.query.dateOfArrival || undefined;
    console.log("I am here");
    // Find the cheapest flights
    amadeus.shopping.flightOffersSearch
      .get({
        originLocationCode: originCode,
        destinationLocationCode: destinationCode,
        departureDate: dateOfDeparture,
        ...(dateOfArrival && { returnDate: dateOfArrival }),
        currencyCode: "INR",
        adults: "1",
        max: "10", //will return 10 results
      })
      .then(function (response) {
      //  console.log("promie resolved >>", response.data);
        res.writeHead(200, { 
          'Content-Type': 'application/json' 
        }); 
        res.write(JSON.stringify(response.data)); 
        res.end(); 
        //return res.json(response.data);
      })
      .catch(function (responseError) {
     // console.log("error block ", responseError);
      res.writeHead(responseError.response.statusCode, { 
        'Content-Type': 'application/json' 
      }); 
      res.write(responseError.response.body); 
      res.end(); 
    });
  });

  app.get("/sample" , function(re,res) {
    //console.log('sample route called');
    return res.send('hello');
  })

//it wll check real time availability and price with airlines 
  app.post("/flightAvailability", function (req, res) {
    console.log("availaibity in aggregator>>>", req.body);
    //response.send("Simple Call users Route from Here!");
    // ...
    // Create Amadeus API client
    const amadeus = new Amadeus({
      clientId: API_KEY,
      clientSecret: SECRET_KEY,
    });

    const inputFlight = req.body;
    amadeus.shopping.flightOffers.pricing
      .post(
        JSON.stringify({
          data: {
            type: "flight-offers-pricing",
            flightOffers: [inputFlight],
          },
        })
      )
      .then(function (response) {
        res.writeHead(200, { 
          'Content-Type': 'application/json' 
        }); 
        res.write(JSON.stringify(response.data)); 
        res.end(); 
        //return res.send(response.data);
      })
      .catch(function (responseError) {
        res.writeHead(responseError.response.statusCode, { 
          'Content-Type': 'application/json' 
        }); 
        res.write(responseError.response.body); 
        res.end(); 
      });
  });
  //create a request containing the selected flight offer and the passenger data  to complete the booking
  app.post("/flightCreateOrder", function (req, res) {
    // ...
    // Create Amadeus API client
    const amadeus = new Amadeus({
      clientId: API_KEY,
      clientSecret: SECRET_KEY,
    });

    const inputFlightCreateOrder = req.body;
    amadeus.booking.flightOrders
  .post(
    JSON.stringify({
      data: {
        type: "flight-order",
        flightOffers: [inputFlightCreateOrder],
        travelers: [traveller],
      },
    })
  )
  .then(function (response) {
    //console.log('flight aggregator then>>' + response.data );
    res.writeHead(200, { 
      'Content-Type': 'application/json' 
    }); 
    res.write(JSON.stringify(response.data)); 
    res.end();
  })
  .catch(function (responseError) {
      console.log("flight aggregator create order>>", responseError);
      //console.log("flight aggregator create order>>", responseError.response.body);
      
      res.writeHead(responseError.response.statusCode, { 
        'Content-Type': 'application/json' 
      }); 
      res.write(responseError.response.body); 
      res.end();
  });
  });
};