//jest.mock("amadeus");
jest.mock("axios");

const request = require("supertest");
const app = require("./app");
const requestPayload = require("./mock/mockReqPayload");
const mockResponse = require("./mock/mockResPayload");
//const Amadeus = require("amadeus");
const axios = require("axios");
const { response } = require("express");

const errorCode = {
  "response": {
      "status": 400,
      "data": {
          "errors": []
        }
  }
}

axios.post.mockResolvedValueOnce(mockResponse);
axios.post.mockRejectedValueOnce(errorCode);
//axios.get.mockRejectedValueOnce(new Error('some product/stores invalid'));

describe("Flight Availability API", () => {

  it("POST /flight-availability ===> get real time price and availability from airlines", () => {
    console.log('it called');
    return request(app)
      .post("/flight-availability")
      .send(requestPayload)
      .then((response) => {
        console.log("print mock 200>>");
       expect(response.body).toEqual(mockResponse.data);
      })
  });

  it("POST /flight-availability ===> it will return error response result from api ", () => {
    return request(app)
      .post("/flight-availability")
      .send(requestPayload)
      .then((response) => {
        console.log('print mock 400');
        expect(response.status).toEqual(errorCode.response.status);
      });
  });
});