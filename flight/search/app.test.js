//jest.mock("amadeus");
jest.mock("axios");

const request = require("supertest");
const app = require("./app");
const mockResponse = require("./mock/mockResponse");

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

axios.get.mockResolvedValueOnce(mockResponse);
axios.get.mockRejectedValueOnce(errorCode);
//axios.get.mockRejectedValueOnce(new Error('some product/stores invalid'));

describe("Flight Search API", () => {

  it("GET /flight-search ===> array of flights based on search", () => {
    return request(app)
      .get("/flight-search")
      .query({
        originCode: "DEL",
        destinationCode: "BLR",
        dateOfDeparture: "2022-05-10",
      })
      .then((response) => {
       // console.log("print mock 200 >>", mockResponse.data);
        expect(response.body).toEqual(mockResponse.data);
      })
  });

  it("GET /flight-search ===> it will return error response result from api ", () => {
    return request(app)
      .get("/flight-search")
      .then((response) => {
        //console.log("print mock 400 >>", response.status , "::", errorCode.response.status);
        expect(response.status).toEqual(errorCode.response.status);
      });
  });
});