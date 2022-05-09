const mockData = 
{
  "type": "flight-offer",
  "id": "1",
  "source": "GDS",
  "instantTicketingRequired": false,
  "nonHomogeneous": false,
  "paymentCardRequired": false,
  "lastTicketingDate": "2022-09-10",
  "itineraries": [
    {
      "segments": [
        {
          "departure": {
            "iataCode": "DEL",
            "terminal": "3",
            "at": "2022-10-10T06:10:00"
          },
          "arrival": {
            "iataCode": "BLR",
            "at": "2022-10-10T08:55:00"
          },
          "carrierCode": "AI",
          "number": "803",
          "aircraft": {
            "code": "788"
          },
          "operating": {
            "carrierCode": "AI"
          },
          "duration": "PT2H45M",
          "id": "1",
          "numberOfStops": 0,
          "co2Emissions": [
            {
              "weight": 146,
              "weightUnit": "KG",
              "cabin": "ECONOMY"
            }
          ]
        }
      ]
    }
  ],
  "price": {
    "currency": "INR",
    "total": "4381.00",
    "base": "3630.00",
    "fees": [
      {
        "amount": "0.00",
        "type": "SUPPLIER"
      },
      {
        "amount": "0.00",
        "type": "TICKETING"
      },
      {
        "amount": "0.00",
        "type": "FORM_OF_PAYMENT"
      }
    ],
    "grandTotal": "4381.00",
    "billingCurrency": "INR"
  },
  "pricingOptions": {
    "fareType": [
      "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
  },
  "validatingAirlineCodes": [
    "AI"
  ],
  "travelerPricings": [
    {
      "travelerId": "1",
      "fareOption": "STANDARD",
      "travelerType": "ADULT",
      "price": {
        "currency": "INR",
        "total": "4381",
        "base": "3630",
        "taxes": [
          {
            "amount": "236.00",
            "code": "P2"
          },
          {
            "amount": "63.00",
            "code": "IN"
          },
          {
            "amount": "191.00",
            "code": "K3"
          },
          {
            "amount": "91.00",
            "code": "WO"
          },
          {
            "amount": "170.00",
            "code": "YR"
          }
        ],
        "refundableTaxes": "751"
      },
      "fareDetailsBySegment": [
        {
          "segmentId": "1",
          "cabin": "ECONOMY",
          "fareBasis": "SAP30",
          "class": "S",
          "includedCheckedBags": {
            "weight": 25,
            "weightUnit": "KG"
          }
        }
      ]
    }
  ]
}


module.exports = mockData;