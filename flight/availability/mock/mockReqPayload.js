const mockData = 
{
    "type": "flight-offer",
    "id": "1",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "lastTicketingDate": "2022-09-10",
    "numberOfBookableSeats": 9,
    "itineraries": [
      {
        "duration": "PT2H45M",
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
            "blacklistedInEU": false
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
        }
      ],
      "grandTotal": "4381.00"
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
          "total": "4381.00",
          "base": "3630.00"
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