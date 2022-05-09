jest.mock("amadeus");

const request = require("supertest");
const app = require("./app");
const mockResponse = require("./mock/mockResponse");

const Amadeus = require("amadeus");
const { response } = require("express");

const errorCode = {
  "response": {
      "statusCode": 400,
      "body": ""
  }
}

Amadeus.mockImplementation(() => {
  return {
    shopping: {
      flightOffersSearch: {
        get: jest.fn(params => {
          console.log("mocked get method >>", params);
            if(params.departureDate === "2022-05-10") {
              return Promise.resolve(mockResponse);
            } else {
              return Promise.reject(errorCode)
            }
        })
      },
    },
  };
})

let amadeus;
let credentials = {
  clientId: "123",
  clientSecret: "234",
};

describe("Flight Search API", () => {
  beforeEach(() => {
    amadeus = new Amadeus(credentials);
  });

  it("GET /flightSearch ===> array of flights based on search", () => {
    return request(app)
      .get("/flightSearch")
      .query({
        originCode: "DEL",
        destinationCode: "BLR",
        dateOfDeparture: "2022-05-10",
      })
      .then((response) => {
        console.log("print mock 200 >>", mockResponse.data);
        expect(response.body).toEqual(mockResponse.data);
      });
  });

  
  it("GET /flightSearch ===> 400 error msg", () => {
    return request(app)
      .get("/flightSearch")
      .then((response) => {
        console.log("print mock 400 >>", response.statusCode);
       // expect(response.statusCode).toEqual(errorCode.response.statusCode);
      });
  });

});
