// router.js
const { URL } = require("../config");
//const Amadeus = require("amadeus");
const express = require('express');
const router = express.Router();
const axios = require("axios");

router.post("/", function (req, res) {
  axios
  .post(URL, req.body)
  .then((resp) => {
   //console.log("hey order success>>>" , resp.data);
    return res.json(resp.data);
  })
  .catch((err) => {
   // console.log("order catch second>>>", err.response.status, "::" , err.response.data);
    // Handle Error Here
    return res
    .status(err.response.status)
    .json(err.response.data).end();
  });
});

module.exports = router;
